#!/bin/zsh

# TODO: see other TODO comments spread throughout this file as well

# TODO: refactor to read the build date from args/similar

# TODO: add an arg that allows us to skip the 'stop at first buildmanifest' check (aka: assume all urls are for a single build)

# TODO: add automation that calls buildmanifest-to-json.js --extract-urls

# TODO: automatically identify the webpack entry and extract the path to the webpack file to use in the changelog generation template

# TODO: add automation that calls unpack-files-from-orig.js ?
#   pbpaste | ./scripts/unpack-files-from-orig.js && npm run-script format:unpacked

# TODO: improve usage docs to include name/description/example showing that it reads from STDIN

# TODO: add support for reading json from STDIN, and if so, extracting the date from it rather than prompting the user

# TODO: detect if there is a webpack entry file chunk, and if so, tell the user they need to manually extract/download the URL references from it
# TODO: also generate placeholder sections in the CHANGELOG if there is a webpack entry file url detected
# TODO: can we automate extracting the references from webpack entry file by parsing the AST?

# Extract the script name
SCRIPT_NAME="$(basename "$0")"

# Get the directory of the currently executing script
CURRENT_SCRIPT_DIR="$(dirname "$0")"

# Configuration
download_directory="orig/"

# Global variables
typeset -a input_urls filtered_urls already_downloaded_urls wget_urls wayback_download_urls missing_urls found_urls
typeset build_hash

# Global variables for command-line arguments
declare skip_changelog_filter=false
declare skip_filter_already_downloaded=false

# Function to display usage information
usage() {
  echo "Usage: $SCRIPT_NAME [-h|--help] [--skip-changelog-filter] [--skip-filter-already-downloaded]"
  echo "  --skip-changelog-filter           Skip filtering URLs already in the changelog"
  echo "  --skip-filter-already-downloaded  Skip filtering already downloaded files"
  echo "  -h, --help                        Display this help and exit"
}

# Main function
main() {
  # Parse options
  while :; do
    case $1 in
      -h|--help)
        usage
        return 0
        ;;
      --skip-changelog-filter)
        skip_changelog_filter=true
        ;;
      --skip-filter-already-downloaded)
        skip_filter_already_downloaded=true
        ;;
      -*)
        echo "Unknown option: $1" >&2
        usage
        return 1
        ;;
      *)
        break
    esac
    shift
  done

  read_urls_from_stdin
  print_urls input_urls "Input URLs"

  if ! $skip_changelog_filter; then
      filter_urls_not_in_changelog
      print_urls filtered_urls "Filtered URLs not already in CHANGELOG"
  else
      echo "[skipping] Filtering for URLs already in CHANGELOG due to --skip-changelog-filter\n"
  fi

  filter_and_extract_build_hash
  print_urls filtered_urls "Filtered URLs for first found build"
  echo "Build Hash: $build_hash"
  echo "  Remember to run the following, and manually ensure they are all downloaded/included properly:"
  echo "    ./scripts/buildmanifest-to-json.js $build_hash --extract-urls | ./scripts/filter-for-unsaved.js"
  echo "  Remember to run the following after downloading files:"
  echo "    pbpaste | ./scripts/unpack-files-from-orig.js && npm run-script format:unpacked"
  echo "  If there is a webpack*.js file, remember to manually extract/download/include entries from it (eg *.css) properly:"
  echo "    pbpaste | ./scripts/unpack-files-from-orig.js && npm run-script format:unpacked"
  echo

  process_urls
  print_urls already_downloaded_urls "Already saved URLs"
  print_urls wget_urls "Downloaded URLs (wget)"
  print_urls wayback_download_urls "Downloaded URLs (waybackmachine)"
  print_urls missing_urls "Missing URLs (waybackmachine)"

  combine_found_urls
  print_urls found_urls "Combined 'found' URLs (not from build manifest)"

  generate_changelog_and_commit_message
}

# Helper function to check if an array contains a specific element
array_contains() {
  local needle=$1
  shift
  local element
  for element in "$@"; do
    if [[ $element == $needle ]]; then
      return 0
    fi
  done
  return 1
}

# Helper function to print URLs from a specified array
# Usage: print_urls array_name [optional_message] [output_target]
#   - array_name: The name of the array containing URLs to be printed.
#   - optional_message: Optional custom message to display (default is "array_name URLs").
#   - output_target: Optional output target for printing, case-insensitive. Use "stdout" for standard output,
#                    or "stderr" for standard error. Default is standard output.
#
# Example usages:
#   To print URLs to standard output:
#   print_urls my_array "My URLs" "stdout"
#
#   To print URLs to standard error:
#   print_urls my_array "My URLs" "stderr"
#
#   To print URLs to standard output with the default message:
#   print_urls my_array
print_urls() {
  local arr_name=$1
  local message=${2:-"$arr_name URLs"}
  local output_target=${3:l}

  eval "local -a arr=(\"\${${arr_name}[@]}\")"

  local output_fd=1  # Default to stdout
  if [[ "$output_target" == "stderr" ]]; then
    output_fd=2  # Redirect to stderr
  fi

  echo "$message (${#arr[@]}):" >&$output_fd

  if [[ ${#arr[@]} -eq 0 ]]; then
    echo "  <none>" >&$output_fd
  else
    for url in "${arr[@]}"; do
      echo "  $url" >&$output_fd
    done
  fi

  echo >&$output_fd
}

# Function to read URLs from STDIN
read_urls_from_stdin() {
  input_urls=()

  # Check if STDIN is attached to a terminal
  if [[ -t 0 ]]; then
    echo "Reading URLs from STDIN (Paste your input, then press Ctrl-D when done):"
  fi

  while IFS= read -r line || [[ -n $line ]]; do
    # Trim leading and trailing whitespace using awk
    trimmed_line=$(echo "$line" | awk '{$1=$1;print}')

    # Check if the trimmed line starts with http:// or https://
    if [[ $trimmed_line =~ ^https?:// ]]; then
      input_urls+=("$trimmed_line")
    fi
  done

  # Check if any URLs were read
  if [[ ${#input_urls[@]} -eq 0 ]]; then
    echo "Error: No valid URLs were read from STDIN." >&2
    exit 1
  fi
}

# Function to filter URLs not in the changelog
filter_urls_not_in_changelog() {
  # Determine which URLs to use based on whether filtered_urls is populated
  local urls_to_check=("${filtered_urls[@]:-$input_urls[@]}")

  # Initialize an empty array for output URLs
  local output_urls=()

  # Convert the array to a newline-separated string
  local urls_with_newlines=$(printf "%s\n" "${urls_to_check[@]}")

  # Call the external script and capture its output
  local script_output=$("${CURRENT_SCRIPT_DIR}/filter-urls-not-in-changelog.js" <<< "$urls_with_newlines")

  # Check if there is any output
  if [[ -z $script_output ]]; then
    echo "Error: No URLs returned from filter-urls-not-in-changelog.js" >&2
    exit 1
  fi

  # Split the output by newlines into an array
  while read -r line; do
    output_urls+=("$line")
  done <<< "$script_output"

  # Replace the global filtered_urls array with the output
  filtered_urls=("${output_urls[@]}")
}

# Helper function to filter out already downloaded URLs
filter_unsaved_urls() {
  # Capture all arguments as an array
  local urls_to_check=("$@")

  # Initialize an empty array for unsaved URLs
  local unsaved_urls=()

  # Convert the array to a newline-separated string
  local urls_with_newlines=$(printf "%s\n" "${urls_to_check[@]}")

  # Call the filter-for-unsaved.js script and pass the URLs through stdin
  local unsaved_urls_output=$("${CURRENT_SCRIPT_DIR}/filter-for-unsaved.js" <<< "$urls_with_newlines")

  # echo "unsaved_urls_output=$unsaved_urls_output" >&2

  # Check if there is any output
  if [[ -z $unsaved_urls_output ]]; then
    # echo "All URLs have already been downloaded." >&2
    return 1
  fi

  # Split the output by newlines into an array
  while read -r line; do
    unsaved_urls+=("$line")
  done <<< "$unsaved_urls_output"

  echo "${unsaved_urls[@]}"
}

# Function to filter input_urls and extract build hash
filter_and_extract_build_hash() {
  build_hash=""

  # Determine which URLs to use based on whether filtered_urls is populated
  local local_input_urls=("${filtered_urls[@]:-$input_urls[@]}")
  local local_output_urls=()
  local found_manifest=false

  for url in "${local_input_urls[@]}"; do
    if [[ $url =~ '_buildManifest.js$' ]] || [[ $url =~ '_ssgManifest.js$' ]]; then
      local current_hash=$(echo $url | grep -oE 'static/[^/]+/' | cut -d '/' -f 2)

      # Set found_manifest true whenever a build or ssg manifest is encountered
      found_manifest=true

      if [[ -z $build_hash ]]; then
        build_hash=$current_hash
      elif [[ $current_hash != $build_hash ]]; then
        # Break early if the manifest has a different hash
        break
      fi
    elif $found_manifest; then
      # Break after finding the next URL post the build or ssg manifest
      break
    fi

    local_output_urls+=("$url")
  done

  # Check if there are any output URLs left
  if [[ ${#local_output_urls[@]} -eq 0 ]]; then
    echo "Error: No URLs left after filtering for build." >&2
    exit 1
  fi

  # Check if build hash was found
  if [[ -z $build_hash ]]; then
    print_urls local_input_urls "Error: No build or ssg manifest found in filtered URLs" "stderr"
    exit 1
  fi

  # Replace the global filtered_urls array with the output
  filtered_urls=("${local_output_urls[@]}")
}

# Process URLs function
process_urls() {
  local unsaved_urls=()
  if ! $skip_filter_already_downloaded; then
    # Filter out already downloaded URLs
    unsaved_urls=($(filter_unsaved_urls "${filtered_urls[@]}"))
    print_urls unsaved_urls "Unsaved URLs"
  else
    # If skipping, treat all filtered URLs as unsaved
    unsaved_urls=("${filtered_urls[@]}")
    echo "[skipping] Checking for already downloaded URLs\n"
  fi

  echo "Processing ${#filtered_urls[@]} URLs:"
  # Loop through each filtered URL
  for url in "${filtered_urls[@]}"; do
    if array_contains "$url" "${unsaved_urls[@]}"; then
      echo "  processing: $url"

      # If URL is unsaved, try downloading or check Wayback Machine
      if try_wget_download "$url"; then
        wget_urls+=("$url")
      else
        check_wayback_machine "$url"
      fi
    else
      # If URL is already saved, directly add to wget_urls
      echo "  [skipping] already saved: $url"
      already_downloaded_urls+=("$url")
    fi
  done
  echo
}

# Combine URLs from filtered_urls into found_urls if they are in already_downloaded_urls, wget_urls, or wayback_download_urls.
combine_found_urls() {
  for url in "${filtered_urls[@]}"; do
    # TODO: I think we don't want to combine wayback_download_urls here, but actually the raw URLs they are meant to represent (that we aren't currently capturing)
    if array_contains "$url" "${already_downloaded_urls[@]}" || \
       array_contains "$url" "${wget_urls[@]}" || \
       array_contains "$url" "${wayback_download_urls[@]}"; then
      found_urls+=("$url")
    fi
  done
}

# Function to download URL using wget and format output
try_wget_download() {
  local url=$1
  local wget_output
  wget_output=$(wget --no-verbose --directory-prefix "$download_directory" --force-directories --no-host-directories "$url" 2>&1)

  if [[ $? -eq 0 ]]; then
    echo "    [wget::downloaded] $url"
    return 0
  else
    echo "    [wget::error] Failed to download $url: $wget_output"
    return 1
  fi
}

# Function to download from Wayback Machine and format output
try_wget_wayback_download() {
  local url=$1
  local wget_output
  wget_output=$(wget --no-verbose --directory-prefix "$download_directory" --force-directories --no-host-directories --cut-dirs 5 "$url" 2>&1)

  if [[ $? -eq 0 ]]; then
    echo "    [wayback::downloaded] $url"
    return 0
  else
    echo "    [wayback::error] Failed to download from Wayback Machine $url: $wget_output"
    return 1
  fi
}

# Function to check URL with Wayback Machine
check_wayback_machine() {
  local url=$1

  echo "    [wayback] Checking URL with Wayback Machine: $url"
  local wayback_result=$(curl -s "http://archive.org/wayback/available?url=$url")

  if [[ $(jq '.archived_snapshots.closest.url' <<< $wayback_result) != null ]]; then
    local wayback_url=$(jq -r '.archived_snapshots.closest.url' <<< $wayback_result)
    wayback_download_urls+=("$wayback_url")
    # TODO: should we also add the normal URL to a list here? Or can we do that when/if it downloads successfully
  else
    missing_urls+=("$url")
  fi
}

check_wayback_machine() {
  local url=$1

  echo "    [wayback] Checking URL with Wayback Machine: $url"
  local wayback_result=$(curl -s "http://archive.org/wayback/available?url=$url")

  local wayback_download_url=$(jq -r '.archived_snapshots.closest.url // empty' <<< "$wayback_result")

  if [[ -n $wayback_download_url ]]; then
    echo "    [success] Found in Wayback Machine: $wayback_download_url"
    wayback_download_urls+=("$wayback_download_url")
  else
    echo "    [fail] Not found in Wayback Machine: $url"
    missing_urls+=("$url")
  fi
}

# Function to download from Wayback Machine or show commands
download_or_show_wayback_commands() {
  local success_downloads=() failed_downloads=()
  if [[ ${#wayback_download_urls} -gt 0 ]]; then
    echo "Do you want to download the Wayback Machine URLs now? [y/N]"
    read answer </dev/tty

    if [[ $answer == [Yy]* ]]; then
      for wb_url in $wayback_download_urls; do
        if try_wget_wayback_download $wb_url; then
          success_downloads+=($wb_url)
        else
          failed_downloads+=($wb_url)
        fi
      done
    else
      echo "You can download the Wayback Machine URLs later with:"
      for wb_url in $wayback_download_urls; do
        echo "wget --no-verbose --directory-prefix $download_directory --force-directories --no-host-directories --cut-dirs 5 \\"
        echo "  \"$wb_url\" \\"
      done
      return
    fi
  fi

  if [[ ${#success_downloads[@]} -gt 0 ]]; then
    echo "The following Wayback Machine URLs were downloaded successfully. Please remove extra header/footer content from them manually:"
    printf '%s\n' "${success_downloads[@]}"
  fi
  if [[ ${#failed_downloads[@]} -gt 0 ]]; then
    echo "The following Wayback Machine URLs failed to download. Manual intervention required:"
    printf '%s\n' "${failed_downloads[@]}"
  fi
}

# Function to generate changelog entry and commit message
generate_changelog_and_commit_message() {
  local changelog_entry=""
  local commit_message=""

  echo "Generating CHANGELOG entry + commit message..."

  # Prompt the user to supply the build date
  echo -n "  Enter the build date for build '$build_hash' (YYYY-MM-DD format): "
  read build_date </dev/tty
  echo

  # Start building the changelog entry
  if [[ ${#missing_urls[@]} -gt 0 ]] && [[ ${#found_urls[@]} -gt 0 ]]; then
    changelog_entry+="## ${build_date}Z (\`$build_hash\`) \`[partial archive]\`\n\n"
    changelog_entry+="### Notes\n\n"
    changelog_entry+="The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.\n\n"
  elif [[ ${#missing_urls[@]} -gt 0 ]]; then
    changelog_entry+="## ${build_date}Z (\`$build_hash\`) \`[not archived]\`\n\n"
    changelog_entry+="### Notes\n\n"
    changelog_entry+="The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.\n\n"
  elif [[ ${#found_urls[@]} -gt 0 ]]; then
    changelog_entry+="## ${build_date}Z (\`$build_hash\`)\n\n"
    changelog_entry+="### Notes\n\n"
    changelog_entry+="TODO\n\n"
  fi

  changelog_entry+="### Not From Build Manifest\n\n"
  if [[ ${#found_urls[@]} -gt 0 ]]; then
    changelog_entry+="#### Archived\n\n"
    changelog_entry+="\`\`\`\n"
    changelog_entry+="$(printf "%s\n" "${found_urls[@]}")\n"
    changelog_entry+="\`\`\`\n\n"
  fi
  if [[ ${#missing_urls[@]} -gt 0 ]]; then
    changelog_entry+="#### Missing\n\n"
    changelog_entry+="\`\`\`\n"
    changelog_entry+="$(printf "%s\n" "${missing_urls[@]}")\n"
    changelog_entry+="\`\`\`\n\n"
  fi

  changelog_entry+="### From Build Manifest\n\n"
  changelog_entry+="#### Archived\n\n"
  changelog_entry+="\`\`\`\n"
  changelog_entry+="TODO\n"
  # changelog_entry+="$(printf "%s\n" "${TODO[@]}")\n"
  changelog_entry+="\`\`\`\n\n"
  changelog_entry+="#### Missing\n\n"
  changelog_entry+="\`\`\`\n"
  changelog_entry+="TODO (or remove this section if nothing missing)\n"
  # changelog_entry+="$(printf "%s\n" "${TODO[@]}")\n"
  changelog_entry+="\`\`\`\n\n"

  changelog_entry+="### From \`_next/static/chunks/webpack-TODOWEBPACKHASH.js\`\n\n"
  changelog_entry+="#### Archived\n\n"
  changelog_entry+="\`\`\`\n"
  changelog_entry+="TODO (relevant changes from the webpack.js file.. usually it will only be .css file changes I believe)\n"
  # changelog_entry+="$(printf "%s\n" "${TODO[@]}")\n"
  changelog_entry+="\`\`\`\n\n"
  changelog_entry+="#### Missing\n\n"
  changelog_entry+="\`\`\`\n"
  changelog_entry+="TODO (or remove this section if nothing missing)\n"
  # changelog_entry+="$(printf "%s\n" "${TODO[@]}")\n"
  changelog_entry+="\`\`\`\n\n"

  # Generate commit message
  if [[ -n "$missing_urls" ]] && [[ -n "$found_urls" ]]; then
    commit_message="[content-partial] add $build_hash info/content from ${build_date}Z"
  elif [[ -n "$missing_urls" ]]; then
    commit_message="[content-missing] add $build_hash info from ${build_date}Z"
  elif [[ -n "$found_urls" ]]; then
    commit_message="[content] add $build_hash content from ${build_date}Z"
  fi

  # Print the changelog entry and commit message
  echo "$changelog_entry"
  echo "$commit_message"
}

# Execute main function
main "$@"

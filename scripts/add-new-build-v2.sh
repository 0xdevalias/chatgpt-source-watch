#!/bin/zsh

# TODO: refactor to read the build date from args/similar

# TODO: add support for reading json from STDIN, and if so, extracting the date from it rather than prompting the user

# TODO: Check why we aren't using try_wget_wayback_download / download_or_show_wayback_commands currently, and where it makes sense to do so (probably in process_urls)

# TODO: automatically submit URLs to be archived by waybackmachine if they aren't already

# TODO: refactor user input prompts (eg. download_confirmation_prompt, build_date_prompt, etc) into a reusable helper function

# TODO: Make a v2.5/v3 of this that is rewritten in JavaScript

# TODO: Make the user confirm before unpacking newly downloaded files?

# TODO: we might also want to de-duplicate URLs between the main, buildManifest, and webpack URLs
#   If it is in main, don't include in buildManifest/webpack; if it's in main/buildManifest, don't include it in webpack

# TODO: maybe figure a better way of 'picking a single build' that doesn't truncate potentially relevant URLs that might come after _buildManifest in the list

# TODO: see other TODO comments spread throughout this file as well

# TODO: maybe add an arg that allows us to skip the 'stop at first buildmanifest' check (aka: assume all urls are for a single build)?

# Extract the script name
SCRIPT_NAME="$(basename "$0")"

# Get the directory of the currently executing script
CURRENT_SCRIPT_DIR="$(dirname "$0")"

# Configuration
download_directory="orig/"

# Global variables
typeset -a input_urls input_filtered_urls input_filtered_urls_existed_already input_filtered_urls_downloaded_wget input_filtered_urls_downloaded_wayback input_filtered_urls_missing input_filtered_urls_found
typeset -a build_manifest_urls build_manifest_urls_existed_already build_manifest_urls_downloaded_wget build_manifest_urls_downloaded_wayback build_manifest_urls_missing build_manifest_urls_found
typeset -a webpack_urls webpack_urls_existed_already webpack_urls_downloaded_wget webpack_urls_downloaded_wayback webpack_urls_missing webpack_urls_found
typeset build_hash app_release_version
typeset build_manifest_file_url build_manifest_file_path
typeset webpack_file_url webpack_file_path

# Global variables for command-line arguments
declare skip_filter_changelog=false
declare skip_filter_already_downloaded=false

# Function to display usage information
usage() {
  echo "Usage: $SCRIPT_NAME [OPTIONS]"
  echo ""
  echo "Description:"
  echo "  This script processes a list of URLs to manage and archive web content."
  echo "  It reads URLs from standard input (STDIN), allowing for flexible input methods."
  echo ""
  echo "Options:"
  echo "  --skip-filter-changelog           Skip filtering URLs already in the changelog"
  echo "  --skip-filter-already-downloaded  Skip filtering already downloaded files"
  echo "  -h, --help                        Display this help and exit"
  echo ""
  echo "Example:"
  echo "  pbpaste | $SCRIPT_NAME"
  echo "  cat urls.txt | $SCRIPT_NAME"
  echo "  echo 'https://example.com' | $SCRIPT_NAME"
  echo "  $SCRIPT_NAME < urls.txt"
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
      --skip-filter-changelog)
        skip_filter_changelog=true
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
  print_urls input_urls "[input] Input URLs"

  if ! $skip_filter_changelog; then
    input_filtered_urls=($(filter_urls_not_in_changelog "${input_urls[@]}"))
    print_urls input_filtered_urls "[input] Filtered URLs not already in CHANGELOG"

    # Check if the array is empty
    if [[ ${#input_filtered_urls[@]} -eq 0 ]]; then
      echo "Error: No URLs returned from filter-urls-not-in-changelog.js" >&2
      return 1
    fi
  else
    echo "[input] [skipping] Filtering for URLs already in CHANGELOG due to --skip-filter-changelog\n"
  fi

  filter_and_extract_build_hash
  print_urls input_filtered_urls "[input] Filtered URLs for first found build"

  echo "[input] Build Hash: $build_hash"
  echo

  # Try downloading input_filtered_urls and capture response as json
  local input_filtered_urls_json_output="$(process_urls '[main]' "${input_filtered_urls[@]}")"

  # Parse input_filtered_urls_json_output and set globals
  # TODO: do we also want to capture these from the above json out here?
  #   urls_filtered_unsaved
  #   urls_filtered_changelog
  input_filtered_urls_existed_already=(   $(echo "$input_filtered_urls_json_output" | jq -r '.urls_existed_already[]'))
  input_filtered_urls_downloaded_wget=(   $(echo "$input_filtered_urls_json_output" | jq -r '.urls_downloaded_wget[]'))
  input_filtered_urls_downloaded_wayback=($(echo "$input_filtered_urls_json_output" | jq -r '.urls_downloaded_wayback[]'))
  input_filtered_urls_missing=(           $(echo "$input_filtered_urls_json_output" | jq -r '.urls_missing[]'))

  # Combine URLs from input_filtered_urls into input_filtered_urls_found if they are in input_filtered_urls_existed_already, input_filtered_urls_downloaded_wget, or input_filtered_urls_downloaded_wayback
  input_filtered_urls_found=($(intersect_arrays "input_filtered_urls" "${input_filtered_urls_existed_already[@]}" "${input_filtered_urls_downloaded_wget[@]}" "${input_filtered_urls_downloaded_wayback[@]}"))

  print_urls input_filtered_urls_existed_already    "[main] Previously Downloaded URLs"
  print_urls input_filtered_urls_downloaded_wget    "[main] Newly Downloaded URLs (wget)"
  # TODO: these input_filtered_urls_downloaded_wayback currently aren't actually downloaded, until we call try_wget_wayback_download / download_or_show_wayback_commands somewhere in process_urls or similar
  # print_urls input_filtered_urls_downloaded_wayback           "[main] Downloaded URLs (waybackmachine)"
  print_urls input_filtered_urls_downloaded_wayback "[main] Missing URLs that can be manually downloaded from waybackmachine"
  print_urls input_filtered_urls_missing            "[main] Missing URLs that weren't available on waybackmachine"
  print_urls input_filtered_urls_found              "[main] Combined 'found' URLs (existed already + newly downloaded)"

  # Extract chunk URLs from _buildManifest.js if detected
  if detect_build_manifest_file "${input_filtered_urls_found[@]}"; then
    build_manifest_urls=($(extract_build_manifest_urls "$build_hash"))
    print_urls build_manifest_urls "[_buildManifest.js] URLs found in _buildManifest.js"

    # Try downloading build_manifest_urls and capture response as json
    local build_manifest_urls_json_output="$(process_urls '[_buildManifest.js]' "${build_manifest_urls[@]}")"

    # Parse build_manifest_urls_json_output and set globals
    # TODO: do we also want to capture these from the above json out here?
    #   urls_filtered_unsaved
    #   urls_filtered_changelog
    build_manifest_urls_existed_already=(   $(echo "$build_manifest_urls_json_output" | jq -r '.urls_existed_already[]'))
    build_manifest_urls_downloaded_wget=(   $(echo "$build_manifest_urls_json_output" | jq -r '.urls_downloaded_wget[]'))
    build_manifest_urls_downloaded_wayback=($(echo "$build_manifest_urls_json_output" | jq -r '.urls_downloaded_wayback[]'))
    build_manifest_urls_missing=(           $(echo "$build_manifest_urls_json_output" | jq -r '.urls_missing[]'))

    # Filter build_manifest_urls to keep those found in build_manifest_urls_existed_already+build_manifest_urls_downloaded_wget+build_manifest_urls_downloaded_wayback
    build_manifest_urls_found=($(intersect_arrays "build_manifest_urls" "${build_manifest_urls_existed_already[@]}" "${build_manifest_urls_downloaded_wget[@]}" "${build_manifest_urls_downloaded_wayback[@]}"))

    # Display URLs in global build_manifest_* arrays
    print_urls build_manifest_urls_existed_already    "[_buildManifest.js] Previously Downloaded URLs"
    print_urls build_manifest_urls_downloaded_wget    "[_buildManifest.js] Newly Downloaded URLs (wget)"
    # TODO: these build_manifest_urls_downloaded_wayback currently aren't actually downloaded, until we call try_wget_wayback_download / download_or_show_wayback_commands somewhere in process_urls or similar
    # print_urls build_manifest_urls_downloaded_wayback "[_buildManifest.js] Downloaded URLs (waybackmachine)"
    print_urls build_manifest_urls_downloaded_wayback "[_buildManifest.js] Missing URLs that can be manually downloaded from waybackmachine"
    print_urls build_manifest_urls_missing            "[_buildManifest.js] Missing URLs that weren't available on waybackmachine"
    print_urls build_manifest_urls_found              "[_buildManifest.js] Combined 'found' URLs (existed already + newly downloaded)"
  fi

  # Extract chunk URLs from webpack.js if detected
  if detect_webpack_file "${input_filtered_urls_found[@]}"; then
    webpack_urls=($(extract_webpack_urls "${download_directory}${webpack_file_path}"))
    print_urls webpack_urls "[webpack.js] URLs found in webpack.js"

    # Try downloading webpack_urls and capture response as json
    local webpack_urls_json_output="$(process_urls '[webpack.js]' "${webpack_urls[@]}")"

    # Parse build_manifest_urls_json_output and set globals
    # TODO: do we also want to capture these from the above json out here?
    #   urls_filtered_unsaved
    #   urls_filtered_changelog
    webpack_urls_existed_already=(   $(echo "$webpack_urls_json_output" | jq -r '.urls_existed_already[]'))
    webpack_urls_downloaded_wget=(   $(echo "$webpack_urls_json_output" | jq -r '.urls_downloaded_wget[]'))
    webpack_urls_downloaded_wayback=($(echo "$webpack_urls_json_output" | jq -r '.urls_downloaded_wayback[]'))
    webpack_urls_missing=(           $(echo "$webpack_urls_json_output" | jq -r '.urls_missing[]'))

    # Filter webpack_urls to keep those found in webpack_urls_existed_already+webpack_urls_downloaded_wget+webpack_urls_downloaded_wayback
    webpack_urls_found=($(intersect_arrays "webpack_urls" "${webpack_urls_existed_already[@]}" "${webpack_urls_downloaded_wget[@]}" "${webpack_urls_downloaded_wayback[@]}"))

    # Display URLs in global build_manifest_* arrays
    print_urls webpack_urls_existed_already    "[webpack.js] Previously Downloaded URLs"
    print_urls webpack_urls_downloaded_wget    "[webpack.js] Newly Downloaded URLs (wget)"
    # TODO: these webpack_urls_downloaded_wayback currently aren't actually downloaded, until we call try_wget_wayback_download / download_or_show_wayback_commands somewhere in process_urls or similar
    # print_urls webpack_urls_downloaded_wayback "[webpack.js] Downloaded URLs (waybackmachine)"
    print_urls webpack_urls_downloaded_wayback "[webpack.js] Missing URLs that can be manually downloaded from waybackmachine"
    print_urls webpack_urls_missing            "[webpack.js] Missing URLs that weren't available on waybackmachine"
    print_urls webpack_urls_found              "[webpack.js] Combined 'found' URLs (existed already + newly downloaded)"
  fi

  unpack_and_format_files "${input_filtered_urls_found[@]}" "${build_manifest_urls_found[@]}" "${webpack_urls_found[@]}"

  app_release_version=$(extract_app_version)

  generate_changelog_and_commit_message

  echo
  echo "The following commands are run automatically as part of this script, but if for some reason you need to run them manually, they may be helpful:"
  echo "  ./scripts/buildmanifest-to-json.js $build_hash --extract-urls | ./scripts/filter-for-unsaved.js"
  if [[ -n "$webpack_file_path" ]]; then
    echo "  ./scripts/extract-webpack-urls.js '${download_directory}${webpack_file_path}' | ./scripts/filter-for-unsaved.js"
  fi
  echo "  pbpaste | ./scripts/unpack-files-from-orig.js && npm run-script format:unpacked"
}

# Helper function to check if an array contains a specific element
array_contains() {
  local needle=$1
  shift
  local element
  for element in "$@"; do
    if [[ "$element" == "$needle" ]]; then
      return 0
    fi
  done
  return 1
}

# merge_arrays
#
# This function merges multiple arrays into one, ensuring unique elements.
# It iterates through each element in the provided arrays and adds it to the result array
# if it is not already present in it. This function is useful for combining elements from multiple arrays
# into a single array with unique elements.
#
# Arguments:
#   $@: All arguments are arrays to merge.
#
# Output:
#   Echoes the resulting array which contains the union of elements from all provided arrays.
#
# Usage Example:
#   result=($(merge_arrays "${array1[@]}" "${array2[@]}" "${array3[@]}"))
#
# Note:
#   This function uses an `array_contains` function used to check if an array contains a specific element.
merge_arrays() {
  local -a merged_result=()

  local element
  for element in "$@"; do
    if ! array_contains "$element" "${merged_result[@]}"; then
      merged_result+=("$element")
    fi
  done

  echo "${merged_result[@]}"
}

# intersect_arrays
#
# This function performs an intersection operation between a primary array and one or more secondary arrays.
# It iterates through each element in the primary array (specified by its name) and adds it to the result array
# if it is found in any of the secondary arrays. This function is useful for filtering elements from the primary array
# based on their presence in the secondary arrays.
#
# Arguments:
#   $1: The name of the primary array (string). Elements from this array are checked against the secondary arrays.
#   $@: All subsequent arguments are the secondary arrays (arrays). These are the arrays against which elements
#       from the primary array are checked for intersection.
#
# Output:
#   Echoes the resulting array which contains the intersection of elements from the primary array and any of the secondary arrays.
#
# Usage Example:
#   result=($(intersect_arrays "primary_array_name" "${secondary_array1[@]}" "${secondary_array2[@]}"))
#
# Note:
#   This function assumes the existence of an `array_contains` function used to check if an array contains a specific element.
intersect_arrays() {
  local primary_array_name=$1
  eval "local -a primary_array=(\"\${${primary_array_name}[@]}\")"
  local secondary_arrays=("${@:2}") # Arrays to intersect with

  local -a intersection_result=()

  local element
  for element in "${primary_array[@]}"; do
    if array_contains "$element" "${secondary_arrays[@]}"; then
      intersection_result+=("$element")
    fi
  done

  echo "${intersection_result[@]}"
}

# diff_arrays
#
# This function computes the difference between a primary array and one or more secondary arrays.
# It iterates through each element in the primary array and adds it to the result array
# if it is not found in any of the secondary arrays. This function is useful for excluding elements from the primary array
# that are present in the secondary arrays.
#
# Arguments:
#   $1: The name of the primary array (string). Elements from this array are checked against the secondary arrays.
#   $@: All subsequent arguments are the secondary arrays. These are the arrays against which elements
#       from the primary array are checked for exclusion.
#
# Output:
#   Echoes the resulting array which contains elements from the primary array not present in any of the secondary arrays.
#
# Usage Example:
#   result=($(diff_arrays "primary_array_name" "${secondary_array1[@]}" "${secondary_array2[@]}"))
#
# Note:
#   This function assumes the existence of an `array_contains` function used to check if an array contains a specific element.
diff_arrays() {
  local primary_array_name=$1
  eval "local -a primary_array=(\"\${${primary_array_name}[@]}\")"
  local secondary_arrays=("${@:2}")  # Arrays to check for exclusion

  local -a diff_result=()

  local element
  for element in "${primary_array[@]}"; do
    if ! array_contains "$element" "${secondary_arrays[@]}"; then
      diff_result+=("$element")
    fi
  done

  echo "${diff_result[@]}"
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

# Helper function to filter for URLs not in the changelog
filter_urls_not_in_changelog() {
  local urls_to_check=("$@") # Capture all arguments as an array

  local -a urls_not_in_changelog

  urls_not_in_changelog=($(printf "%s\n" "${urls_to_check[@]}" | "${CURRENT_SCRIPT_DIR}/filter-urls-not-in-changelog.js"))

  echo "${urls_not_in_changelog[@]}"
}

# Helper function to filter out already downloaded URLs
filter_unsaved_urls() {
  local urls_to_check=("$@") # Capture all arguments as an array

  local -a unsaved_urls

  unsaved_urls=($(printf "%s\n" "${urls_to_check[@]}" | "${CURRENT_SCRIPT_DIR}/filter-for-unsaved.js"))

  echo "${unsaved_urls[@]}"
}

# Helper function to extract URLs from a build manifest
extract_build_manifest_urls() {
  local build_hash=$1 # Capture the build hash as an argument

  local -a manifest_urls

  manifest_urls=($("${CURRENT_SCRIPT_DIR}/buildmanifest-to-json.js" "$build_hash" --extract-urls))

  echo "${manifest_urls[@]}"
}

# Helper function to extract webpack URLs
extract_webpack_urls() {
  local webpack_file_path=$1

  local -a webpack_urls

  webpack_urls=($("${CURRENT_SCRIPT_DIR}/extract-webpack-urls.js" "${webpack_file_path}"))

  echo "${webpack_urls[@]}"
}

# Function to call unpack-files-from-orig.js with specified files/URLs and then format them
unpack_and_format_files() {
  local -a to_unpack=("$@")

  echo "Unpacking files:"

  # Ensure there are files/URLs to unpack
  if [[ ${#to_unpack[@]} -eq 0 ]]; then
    echo "Error: No files found to unpack." >&2
    return 1
  fi

  # Call unpack-files-from-orig.js with the specified files
  printf "%s\n" "${to_unpack[@]}" | "${CURRENT_SCRIPT_DIR}/unpack-files-from-orig.js" | sed 's/^/  /'

  # Run npm script to format unpacked files
  npm run-script format:unpacked | sed 's/^/  /'

  echo
}

# Function to extract the app release version from a specified file
extract_app_version() {
  # Define the file to search in, going one level up from CURRENT_SCRIPT_DIR
  local search_file="${CURRENT_SCRIPT_DIR}/../unpacked/_next/static/chunks/pages/_app.js"

  # Check if the file exists
  if [[ ! -f "$search_file" ]]; then
    echo "Error: File $search_file not found." >&2
    return 1
  fi

  # Use grep to find the 'version:' line and extract the app version
  local app_version=$(grep -C 5 'service: "chatgpt-web",' "$search_file" | grep 'version:' | awk -F '"' '{print $2}')

  # Check if the app version was found
  if [[ -z $app_version ]]; then
    echo "Error: App version not found in $search_file." >&2
    return 1
  fi

  # Return the extracted app version
  echo "$app_version"
}

# Function to filter input_urls and extract build hash
filter_and_extract_build_hash() {
  build_hash=""

  # Determine which URLs to use based on whether input_filtered_urls is populated
  local local_input_urls=("${input_filtered_urls[@]:-$input_urls[@]}")
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

  # Replace the global input_filtered_urls array with the output
  input_filtered_urls=("${local_output_urls[@]}")
}

# Function to process an array of URLs
process_urls() {
  local log_prefix="$1"  # First argument as log prefix
  local urls_to_process=("${@:2}")  # The rest of the arguments as URLs

  local urls_filtered_unsaved=()
  local urls_filtered_changelog=()

  local urls_existed_already=()
  local urls_in_changelog_already=()

  local urls_to_process_filtered=()

  local urls_downloaded_wget=()
  local urls_downloaded_wayback=()
  local urls_missing=()

  # Always create filtered arrays
  urls_filtered_unsaved=($(filter_unsaved_urls "${urls_to_process[@]}"))
  urls_filtered_changelog=($(filter_urls_not_in_changelog "${urls_to_process[@]}"))

  urls_existed_already=($(diff_arrays "urls_to_process" "${urls_filtered_unsaved[@]}"))
  urls_in_changelog_already=($(diff_arrays "urls_to_process" "${urls_filtered_changelog[@]}"))

  # Log the filtered results or skipping actions
  if ! $skip_filter_already_downloaded; then
    print_urls urls_filtered_unsaved "$log_prefix URLs not already downloaded" "stderr"
  else
    echo "[skipping] $log_prefix Filtering out already downloaded URLs due to --skip-filter-already-downloaded\n" >&2
  fi

  if ! $skip_filter_changelog; then
    print_urls urls_filtered_changelog "$log_prefix URLs not already in CHANGELOG" "stderr"
  else
    echo "[skipping] Filtering out URLs already in CHANGELOG due to --skip-filter-changelog\n" >&2
  fi

  # Create filtered list of URLs to try and download
  for url in "${urls_to_process[@]}"; do
    if ! $skip_filter_already_downloaded && array_contains "$url" "${urls_existed_already[@]}"; then
      continue
    fi

    if ! $skip_filter_changelog && array_contains "$url" "${urls_in_changelog_already[@]}"; then
      continue
    fi

    urls_to_process_filtered+=("$url")
  done

  print_urls urls_to_process_filtered "$log_prefix URLs to be downloaded" "stderr"

  # Loop through each filtered URL
  if [[ ${#urls_to_process_filtered[@]} -ne 0 ]]; then
    echo "$log_prefix Processing URLs (${#urls_to_process_filtered[@]}):" >&2

    for url in "${urls_to_process_filtered[@]}"; do
      echo "  processing: $url" >&2

      if try_wget_download "$url"; then
        urls_downloaded_wget+=("$url")
      else
          echo "    [wayback] Checking URL with Wayback Machine: $url" >&2
          local wayback_result=$(curl -s "http://archive.org/wayback/available?url=$url")

          local wayback_download_url=$(jq -r '.archived_snapshots.closest.url // empty' <<< "$wayback_result")
          if [[ -n $wayback_download_url ]]; then
            echo "  [wayback::success] Found in Wayback Machine: $wayback_download_url" >&2
            # TODO: I don't think urls_downloaded_wayback is accurate here.. we should be calling one of:
            #   try_wget_wayback_download
            #   download_or_show_wayback_commands
            urls_downloaded_wayback+=("$wayback_download_url")
          else
            echo "  [wayback::fail] Not found in Wayback Machine: $url" >&2
            urls_missing+=("$url")
          fi
      fi
    done
  else
    echo "[skipping] $log_prefix Processing URLs (${#urls_to_process_filtered[@]}) as there are none that need to be downloaded" >&2
  fi
  echo >&2

  # Use jq to construct a JSON object from the arrays so we can 'return multiple values'
  #   \x1E is 'record seperator', and used here to avoid conflicts with spaces/etc that might exist in the URLs
  #   We used the "array[*]"" syntax so the elements are space separated within a single string (whereas "array[@]"" will create a new string for each element)
  (IFS=$'\x1E'; jq -nc --monochrome-output \
    --arg delimiter "$IFS" \
    --arg urls_filtered_unsaved "${urls_filtered_unsaved[*]}" \
    --arg urls_filtered_changelog "${urls_filtered_changelog[*]}" \
    --arg urls_existed_already "${urls_existed_already[*]}" \
    --arg urls_downloaded_wget "${urls_downloaded_wget[*]}" \
    --arg urls_downloaded_wayback "${urls_downloaded_wayback[*]}" \
    --arg urls_missing "${urls_missing[*]}" \
    '$ARGS.named | del(.delimiter) | to_entries | map(.value |= split($ARGS.named.delimiter)) | from_entries'
  )
}

# Function to download URL using wget and format output
try_wget_download() {
  local url=$1
  local wget_output
  wget_output=$(wget --no-verbose --directory-prefix "$download_directory" --force-directories --no-host-directories "$url" 2>&1)

  if [[ $? -eq 0 ]]; then
    echo "    [wget::downloaded] $url" >&2
    return 0
  else
    echo "    [wget::error] Failed to download $url: $wget_output" >&2
    return 1
  fi
}

# Function to download from Wayback Machine and format output
try_wget_wayback_download() {
  local url=$1
  local wget_output
  wget_output=$(wget --no-verbose --directory-prefix "$download_directory" --force-directories --no-host-directories --cut-dirs 5 "$url" 2>&1)

  if [[ $? -eq 0 ]]; then
    echo "    [wayback::downloaded] $url" >&2
    return 0
  else
    echo "    [wayback::error] Failed to download from Wayback Machine $url: $wget_output" >&2
    return 1
  fi
}

# Function to download from Wayback Machine or show commands
download_or_show_wayback_commands() {
  local success_downloads=() failed_downloads=()
  if [[ ${#input_filtered_urls_downloaded_wayback} -gt 0 ]]; then
    # Output this prompt for the user directly to the terminal, so it is shown even when input/output is being redirected
    local download_confirmation_prompt="Do you want to download the Wayback Machine URLs now? [y/N]"
    echo -n "$download_confirmation_prompt" >/dev/tty
    read answer </dev/tty
    if [ ! -t 1 ]; then
      # If STDOUT is not a terminal (i.e., is being redirected), make sure we repeat the above prompt+answer for the logs
      echo -n "$download_confirmation_prompt $answer"
    fi
    echo

    if [[ $answer == [Yy]* ]]; then
      for wb_url in $input_filtered_urls_downloaded_wayback; do
        if try_wget_wayback_download $wb_url; then
          success_downloads+=($wb_url)
        else
          failed_downloads+=($wb_url)
        fi
      done
    else
      echo "You can download the Wayback Machine URLs later with:"
      for wb_url in $input_filtered_urls_downloaded_wayback; do
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

# Function to detect _buildManifest.js file in a given array and set global variable
detect_build_manifest_file() {
  local urls_to_check=("$@")  # Array of URLs passed as arguments
  local build_manifest_regex="(_next/static/[^/]+/_buildManifest\.js)"

  for url in "${urls_to_check[@]}"; do
    if [[ $url =~ $build_manifest_regex ]]; then
      # Capture the full URL
      build_manifest_file_url="$url"

      # Extract the path from the URL
      build_manifest_file_path="${match[1]}"  # This captures the path part from the regex match

      echo "Build manifest file detected: $build_manifest_file_url (\`$build_manifest_file_path\`)" >&2
      echo  >&2
      return 0  # Successful detection
    fi
  done

  echo "No build manifest file detected." >&2
  echo  >&2
  return 1  # Indicate failure to detect
}

# Function to detect webpack file in a given array and set global variable
detect_webpack_file() {
  local urls_to_check=("$@")  # Array of URLs passed as arguments
  local webpack_regex="(_next/static/chunks/webpack.*\.js)"

  for url in "${urls_to_check[@]}"; do
    if [[ $url =~ $webpack_regex ]]; then
      # Capture the full URL
      webpack_file_url="$url"

      # Extract the path from the URL
      webpack_file_path="${match[1]}"

      echo "Webpack entry file detected: $webpack_file_url (\`$webpack_file_path\`)" >&2
      echo  >&2
      return 0  # Successful detection
    fi
  done

  echo "No Webpack entry file detected." >&2
  echo  >&2
  return 1  # Indicate failure to detect
}

# Function to generate changelog entry and commit message
generate_changelog_and_commit_message() {
  local input_filtered_urls_found_not_in_changelog=($(filter_urls_not_in_changelog "${input_filtered_urls_found[@]}"))
  local input_filtered_urls_missing_not_in_changelog=($(filter_urls_not_in_changelog "${input_filtered_urls_missing[@]}"))

  local build_manifest_urls_found_not_in_changelog=($(filter_urls_not_in_changelog "${build_manifest_urls_found[@]}"))
  local build_manifest_urls_missing_not_in_changelog=($(filter_urls_not_in_changelog "${build_manifest_urls_missing[@]}"))

  local webpack_urls_found_not_in_changelog=($(filter_urls_not_in_changelog "${webpack_urls_found[@]}"))
  local webpack_urls_missing_not_in_changelog=($(filter_urls_not_in_changelog "${webpack_urls_missing[@]}"))

  local all_found_urls=($(merge_arrays "${input_filtered_urls_found[@]}" "${build_manifest_urls_found[@]}" "${webpack_urls_found[@]}"))
  local all_missing_urls=($(merge_arrays "${input_filtered_urls_missing[@]}" "${build_manifest_urls_missing[@]}" "${webpack_urls_missing[@]}"))

  local changelog_entry=""
  local changelog_notes=""
  local commit_message=""

  echo "Generating CHANGELOG entry + commit message..."

  # Prompt the user to supply the build date
  # Output this prompt for the user directly to the terminal, so it is shown even when input/output is being redirected
  local build_date_prompt="  Enter the build date for build '$build_hash' (YYYY-MM-DD format): "
  echo -n "$build_date_prompt" >/dev/tty
  read build_date </dev/tty
  if [ ! -t 1 ]; then
    # If STDOUT is not a terminal (i.e., is being redirected), make sure we repeat the above prompt+answer for the logs
    echo -n "$build_date_prompt $build_date"
  fi
  echo
  echo

  # Start building the changelog entry
  if [[ ${#all_found_urls[@]} -gt 0 ]] && [[ ${#all_missing_urls[@]} -gt 0 ]]; then
    commit_message="[content-partial] add $build_hash info/content from ${build_date}Z"

    changelog_entry+="## ${build_date}Z (\`$build_hash\`) \`[partial archive]\`\n\n"

    changelog_notes+="- The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc.\n"
  elif [[ ${#all_found_urls[@]} -eq 0 ]] && [[ ${#all_missing_urls[@]} -gt 0 ]]; then
    commit_message="[content-missing] add $build_hash info from ${build_date}Z"

    changelog_entry+="## ${build_date}Z (\`$build_hash\`) \`[not archived]\`\n\n"

    changelog_notes+="- The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine.\n"
  else
    commit_message="[content] add $build_hash content from ${build_date}Z"

    changelog_entry+="## ${build_date}Z (\`$build_hash\`)\n\n"
  fi

  # Notes
  changelog_notes+="- **tl;dr**\n"
  changelog_notes+="  - TODO high level summary of the technical changes listed below\n"
  changelog_notes+="  - **Twitter thread:** TODO\n"
  changelog_notes+="- App release version (Git SHA?): \`${app_release_version:-TODO}\`\n"
  changelog_notes+="  - Extracted with \`grep -C 3 'service: \"chatgpt-web\",' unpacked/_next/static/chunks/pages/_app.js\`\n"
  changelog_notes+="- \`TODO unpacked file paths here\`\n"
  changelog_notes+="  - TODO notes about the file here\n"
  # changelog_notes+="- The following files had nothing much of note:\n"
  # changelog_notes+="  - \`TODO unpacked file paths here\`\n"
  changelog_notes+="\n"

  changelog_entry+="### Notes\n\n"
  changelog_entry+="The following notes are not necessarily comprehensive, but just things of potential interest that I noted while reviewing the diffs. If you want to see everything that changed, you can look at the diffs of the changed files in the \`unpacked/\` folder:\n\n"
  changelog_entry+="${changelog_notes}"

  if [[ ${#input_filtered_urls_found_not_in_changelog[@]} -gt 0 ]] ||
     [[ ${#input_filtered_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
    changelog_entry+="### Not From Build Manifest\n\n"

    if [[ ${#input_filtered_urls_found_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Archived\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${input_filtered_urls_found_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n\n"
    fi

    if [[ ${#input_filtered_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Missing\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${input_filtered_urls_missing_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n\n"
    fi
  fi

  if [[ ${#build_manifest_urls_found_not_in_changelog[@]} -gt 0 ]] ||
     [[ ${#build_manifest_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
    changelog_entry+="### From Build Manifest\n\n"

    if [[ ${#build_manifest_urls_found_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Archived\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${build_manifest_urls_found_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n\n"
    fi

    if [[ ${#build_manifest_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Missing\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${build_manifest_urls_missing_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n\n"
    fi
  fi

  if [[ ${#webpack_urls_found_not_in_changelog[@]} -gt 0 ]] ||
     [[ ${#webpack_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
    changelog_entry+="### From \`${download_directory}${webpack_file_path}\`\n\n"

    if [[ ${#webpack_urls_found_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Archived\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${webpack_urls_found_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n\n"
    fi

    if [[ ${#webpack_urls_missing_not_in_changelog[@]} -gt 0 ]]; then
      changelog_entry+="#### Missing\n\n"
      changelog_entry+="\`\`\`\n"
      changelog_entry+="$(printf "%s\n" "${webpack_urls_missing_not_in_changelog[@]}")\n"
      changelog_entry+="\`\`\`\n"
    fi
  fi

  # Print the changelog entry and commit message
  echo "$changelog_entry"
  echo "$commit_message"
}

# Execute main function
main "$@"

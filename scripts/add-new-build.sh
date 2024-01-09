#!/usr/bin/env bash

# ChatGPT Ref: https://chat.openai.com/c/1687798b-30a7-42cd-b8f4-5529ae5f4d1e

# Extract the script name
SCRIPT_NAME="$(basename "$0")"

# Get the directory of the currently executing script
CURRENT_SCRIPT_DIR="$(dirname "$0")"

# Global variables
declare -a filtered_urls missing_filtered_urls filtered_urls_from_build_manifest missing_urls_from_build_manifest combined_urls
declare buildhash builddate

# Function to display usage instructions
usage() {
  echo "Usage: cat input.json | ./${SCRIPT_NAME}"
}

# Main function
main() {
  # Check if there's any input on STDIN
  if [ -t 0 ]; then
    usage
    echo "Error: No input provided. Please pipe JSON data into this script."
    exit 1
  fi

  # Read JSON from STDIN and store in a variable
  json_input=$(cat)

  validate_json_input "$json_input"
  process_json_data "$json_input"

  echo "These are the URLs from the original data that aren't already in the CHANGELOG:"
  printf '  %s\n' "${filtered_urls[@]}"
  echo
  missing_filtered_urls=($(check_and_prompt_for_unsaved_urls "${filtered_urls[@]}"))

  if [[ "${missing_filtered_urls[*]}" =~ _buildManifest ]]; then
    echo "Error: _buildManifest URL is missing. Please download/save it, then try again." >&2
    exit 1
  fi

  filtered_urls_from_build_manifest=($("${CURRENT_SCRIPT_DIR}/buildmanifest-to-json.js" "$buildhash" --extract-urls | "${CURRENT_SCRIPT_DIR}/filter-urls-not-in-changelog.js"))
  echo "These are the URLs from the _buildManifest that aren't already in the CHANGELOG:"
  printf '  %s\n' "${filtered_urls_from_build_manifest[@]}"
  echo
  missing_urls_from_build_manifest=($(check_and_prompt_for_unsaved_urls "${filtered_urls_from_build_manifest[@]}"))

  echo "Next we will unpack and format the URLs from the original data + the unsaved ones from the build manifest"
  read -n 1 -s -r -p "Press any key to continue" < /dev/tty
  echo
  echo

  combined_urls=("${filtered_urls[@]}" "${filtered_urls_from_build_manifest[@]}")

  echo "Unpacking and formatting the combined URLs..."
  printf '%s\n' "${combined_urls[@]}" | "${CURRENT_SCRIPT_DIR}/unpack-files-from-orig.js"
  echo
  echo "Running formatter again to be sure..."
  npm run format:unpacked
  echo

  echo "Next we should check the diffs of what has changed (eg. in the webpack file), and decide if we need to go and download anything else (eg. css assets, etc)"
  echo "If there are new assets, download and save them, copy all of the URLs for files changed in this build to the clipboard, then you can run the following command again (repeating as many times as needed):"
  echo
  echo 'pbpaste | ./scripts/unpack-files-from-orig.js && echo && echo "Running formatter again to be sure" && npm run format:unpacked'
  echo

  echo "Once you are happy that all of the data is downloaded, copy all of the URLs for each section to the clipboard (with sections separated by a blank line) and then run one of the following:"
  echo
  echo "pbpaste | ./scripts/update-changelog.js $buildhash $builddate"
  echo "pbpaste | ./scripts/update-changelog.js $buildhash $builddate --keep-missing"
  echo

  echo "Read through all of the change diffs, manually update the CHANGELOG as desired, and then we can finally commit the changes with the following commit message:"
  echo
  echo "add $buildhash from ${builddate}"
}

# Function to validate JSON input
validate_json_input() {
  local json_input="$1"

  # Check if the input data is valid JSON
  if ! echo "$json_input" | jq -e . >/dev/null 2>&1; then
    usage
    echo "Error: Input data is not valid JSON." >&2
    exit 1
  fi

  # Check if the input JSON has the expected structure (i.e., contains both 'url' and 'date' keys)
  if ! echo "$json_input" | jq 'first | (has("url") and has("date"))' | grep -q true; then
    usage
    echo "Error: Invalid input JSON. Expected JSON array with objects containing both 'url' and 'date' keys." >&2
    exit 1
  fi
}

# Function to process JSON data
process_json_data() {
  local json_input="$1"

  # Extract and process URLs
  filtered_urls=($(echo "$json_input" | jq -r '.[].url' | "${CURRENT_SCRIPT_DIR}/filter-urls-not-in-changelog.js"))

  local filtered_urls_json=$(printf '%s\n' "${filtered_urls[@]}" | jq -R -s -c 'split("\n")[:-1]')
  local filtered_json=$(echo "$json_input" | jq --argjson urls "$filtered_urls_json" 'map(select(.url | IN($urls[])))')

  local output=$(echo "$filtered_json" | jq -c 'map(select(.url | contains("_buildManifest")) | {buildhash: (.url | split("/")[5]), date: ((.date | split("T")[0]) + "Z")})')

  echo "The following unsaved builds seem to exist in the data:" >&2
  echo $output | jq -r '.[] | "\(.buildhash) \(.date)"' | sed 's/^/  /' >&2
  echo >&2

  buildhash=$(echo "$output" | jq -r '.[0].buildhash')
  builddate=$(echo "$output" | jq -r '.[0].date')

  # Check for empty or null values
  if [[ -z "$buildhash" || "$buildhash" == "null" || -z "$builddate" || "$builddate" == "null" ]]; then
    echo "Error: buildhash or builddate not found or set to null." >&2
    echo "  buildhash: $buildhash" >&2
    echo "  builddate: $builddate" >&2
    exit 1
  fi

  echo "Continuing with only the first value: $buildhash $builddate" >&2
  echo >&2
}

# Function to check and prompt for unsaved URLs
check_and_prompt_for_unsaved_urls() {
  local input_urls=("$@")
  local unsaved_urls=($(printf '%s\n' "${input_urls[@]}" | "${CURRENT_SCRIPT_DIR}/filter-for-unsaved.js"))

  # Initial check for unsaved URLs
  if [[ ${#unsaved_urls[@]} -gt 0 ]]; then
    echo "And of those, these are the URLs that haven't yet been saved:" >&2
    printf '  %s\n' "${unsaved_urls[@]}" >&2
    echo >&2
  else
    echo "And of those, all URLs have been saved already!" >&2
    echo >&2
    return
  fi

  # Loop for rechecking unsaved URLs
  while : ; do
    echo "Please go and download/save the above URLs before continuing." >&2
    echo >&2
    read -p "Press 'c' to continue without saving these URLs, or any other key to recheck: " -n 1 -r user_choice < /dev/tty
    echo >&2

    if [[ $user_choice == 'c' ]]; then
      echo "Continuing with unsaved URLs." >&2
      echo >&2
      break
    fi

    unsaved_urls=($(echo "${unsaved_urls[@]}" | "${CURRENT_SCRIPT_DIR}/filter-for-unsaved.js"))
    if [[ ${#unsaved_urls[@]} -gt 0 ]]; then
      echo >&2
      echo "The following URLs are still unsaved:" >&2
      printf '  %s\n' "${unsaved_urls[@]}" >&2
      echo >&2
    else
      echo "All URLs have been saved now." >&2
      echo >&2
      break
    fi
  done

  echo "${unsaved_urls[@]}"
}

# Call the main function
main "$@"

#!/usr/bin/env bash

# ChatGPT Ref: https://chat.openai.com/c/1687798b-30a7-42cd-b8f4-5529ae5f4d1e

# Function to display usage instructions
usage() {
  echo "Usage: cat input.json | ./process_webpack_build.sh"
}

# Check if there's any input on STDIN
if [ -t 0 ]; then
  usage
  echo "Error: No input provided. Please pipe JSON data into this script."
  exit 1
fi

# Read JSON from STDIN and store in a variable
json_input=$(cat)

# Check if the input data is valid JSON
if ! echo "$json_input" | jq -e . >/dev/null 2>&1; then
  usage
  echo "Error: Input data is not valid JSON."
  exit 1
fi

# Check if the input JSON has the expected structure (i.e. contains both 'url' and 'date' keys)
if ! echo "$json_input" | jq 'first | (has("url") and has("date"))' | grep -q true; then
  usage
  echo "Error: Invalid input JSON. Expected JSON array with objects containing both 'url' and 'date' keys."
  exit 1
fi

# Extract the URLs and pass them to ./scripts/filter-urls-not-in-changelog.js
filtered_urls=$(echo "$json_input" | jq -r '.[].url' | ./scripts/filter-urls-not-in-changelog.js)

# Convert filtered_urls to a JSON array
filtered_urls_json=$(echo "$filtered_urls" | jq -R -s -c 'split("\n")[:-1]')

# Filter the original JSON data to only contain entries that match the URLs not in the changelog
filtered_json=$(echo "$json_input" | jq --argjson urls "$filtered_urls_json" '
    map(select(.url | IN($urls[])))
')

# Process the filtered JSON data to extract the build hash and date from any _buildManifest URL
output=$(echo "$filtered_json" | jq -c '
    map(select(.url | contains("_buildManifest")) | {buildhash: (.url | split("/")[5]), date: .date})
')

echo "The following unsaved builds seem to exist in the data:"
echo $output | jq -r '.[] | "\(.buildhash) \(.date)"'
echo

buildhash=$(echo $output | jq -r '.[0].buildhash')
builddate=$(echo $output | jq -r '.[0].date')

# Check if buildhash and builddate are not empty and not "null"
if [[ -z "$buildhash" || "$buildhash" == "null" || -z "$builddate" || "$builddate" == "null" ]]; then
  echo "Error: buildhash or builddate not found or set to null."
  echo "  buildhash: $buildhash"
  echo "  builddate: $builddate"
  exit 1
fi

echo "Continuing with only the first value: $buildhash $builddate"
echo

echo "These are the URLs from the original data that aren't already in the CHANGELOG:"
echo "$filtered_urls"
echo

unsaved_urls_from_filtered_data=$(echo "$filtered_urls" | ./scripts/filter-for-unsaved.js)
echo "And of those, these are the URLs that haven't yet been saved:"
echo "$unsaved_urls_from_filtered_data"
echo

urls_from_build_manifest_not_in_changelog=$(./scripts/buildmanifest-to-json.js "$buildhash" --extract-urls | ./scripts/filter-urls-not-in-changelog.js)
echo "These are the URLs from the _buildManifest that aren't already in the CHANGELOG:"
echo "$urls_from_build_manifest_not_in_changelog"
echo

unsaved_urls_from_build_manifest=$(echo "$urls_from_build_manifest_not_in_changelog" | ./scripts/filter-for-unsaved.js)
echo "And of those, these are the URLs that haven't yet been saved:"
echo "$unsaved_urls_from_build_manifest"
echo

if [[ -n "$unsaved_urls_from_build_manifest" ]]; then
  echo "Please go and download/save the above URLs before continuing."

  read -n 1 -s -r -p "Press any key to continue once you have downloaded/saved the URLs..." < /dev/tty
  echo
fi

echo "Next we will unpack and format the URLs from the original data + the unsaved ones from the build manifest"
read -n 1 -s -r -p "Press any key to continue" < /dev/tty
echo

combined_urls="$filtered_urls"$'\n'"$unsaved_urls_from_build_manifest"
echo "Unpacking and formatting the combined URLs..."
echo "$combined_urls" | ./scripts/unpack-files-from-orig.js
echo
echo "Running prettier again to be sure..."
prettier --write unpacked/**/*
echo

echo "Next we should check the diffs of what has changed (eg. in the webpack file), and decide if we need to go and download anything else (eg. css assets, etc)"
echo "If there are new assets, download and save them, copy all of the URLs for files changed in this build to the clipboard, then you can run the following command again (repeating as many times as needed):"
echo
echo 'pbpaste | ./scripts/unpack-files-from-orig.js && echo && echo "Running prettier again to be sure" && prettier --write unpacked/**/*'
echo

echo "Once you are happy that all of the data is downloaded, copy all of the URLs for each section to the clipboard (with sections separated by a blank line) and then run one of the following:"
echo
echo "pbpaste | ./scripts/update-changelog.js $buildhash $builddate"
echo "pbpaste | ./scripts/update-changelog.js $buildhash $builddate --keep-missing"
echo

echo "Read through all of the change diffs, manually update the CHANGELOG as desired, and then we can finally commit the changes with the following commit message:"
echo
echo "add $buildhash from ${builddate}"

#!/bin/bash

# TODO: extract URLs from build manifest, download them if needed, and generate corresponding CHANGELOG section for them

# TODO: detect the difference between a found URL that was downloaded with wget, and one found on waybackmachine that hasn't been downloaded yet

# TODO: Autogenerate command to download latest waybackmachine chunks for found URLs (and/or run it)
#   eg. wget --no-verbose --directory-prefix orig2/ --force-directories --no-host-directories --cut-dirs 5 http://web.archive.org/web/20230925172110/https://cdn.oaistatic.com/_next/static/chunks/bd26816a-796eab5008811694.js

# TODO: refactor to read the URLs and build date from STDIN/args/similar
# TODO: refactor to read our JSON format for urls/etc?

# List of URLs to check
urls=(
  "https://cdn.oaistatic.com/_next/static/chunks/TODO1.js"
  "https://cdn.oaistatic.com/_next/static/chunks/TODO2.js"
)

# Date variable (YYYY-MM-DD format)
build_date="2024-01-02"

extract_build_hash() {
  if [[ "$1" =~ _buildManifest.js$ ]] || [[ "$1" =~ _ssgManifest.js$ ]]; then
    echo "$1" | grep -oE 'static/[^/]+/' | cut -d '/' -f 2
  else
    echo ""
  fi
}

# Initialize variables
download_directory="orig/"
build_hash=""
missing_urls=""
found_urls=""

# Extract build hash from the first buildManifest or ssgManifest URL
for url in "${urls[@]}"; do
  build_hash=$(extract_build_hash "$url")
  if [[ -n "$build_hash" ]]; then
    break
  fi
done

# Loop through each URL to attempt download and check with the Wayback Machine API
echo "Attempting to download URLs:"
echo
for url in "${urls[@]}"; do
  if wget --no-verbose --directory-prefix "$download_directory" --force-directories --no-host-directories "$url"; then
    # wget succeeded, URL is considered found
    found_urls+="$url\n"
  else
    # wget failed, proceed to check with the Wayback Machine API
    echo "Checking URL with Wayback Machine: $url"
    wayback_result=$(curl -s "http://archive.org/wayback/available?url=$url")
    echo "$wayback_result"

    if [[ $(jq '.archived_snapshots | length' <<< "$result") -eq 0 ]]; then
      # URL not found in Wayback Machine
      missing_urls+="$url\n"
    else
      # URL found in Wayback Machine
      found_urls+="$url\n"
    fi
  fi

  echo
done

# Generate changelog entry if there are missing URLs
if [[ -n "$missing_urls" ]] && [[ -n "$found_urls" ]]; then
  echo "## ${build_date}Z (\`$build_hash\`) \`[partial archive]\`"
  echo
  echo "### Notes"
  echo
  echo "The assets from this build weren't archived at the time, and could only be partially found via Wayback Machine/etc."
  echo
  echo "### Not From Build Manifest"
  echo
elif [[ -n "$missing_urls" ]]; then
  echo "## ${build_date}Z (\`$build_hash\`) \`[not archived]\`"
  echo
  echo "### Notes"
  echo
  echo "The assets from this build weren't archived at the time, and couldn't be found via Wayback Machine."
  echo
  echo "### Not From Build Manifest"
  echo
elif [[ -n "$found_urls" ]]; then
  echo "## ${build_date}Z (\`$build_hash\`)"
  echo
  echo "### Notes"
  echo
  echo "TODO"
  echo
  echo "### Not From Build Manifest"
  echo
fi

# Output for found URLs
if [[ -n "$found_urls" ]]; then
  echo "#### Archived"
  echo
  echo "\`\`\`"
  echo -e "$found_urls"
  echo "\`\`\`"
  echo
fi

if [[ -n "$missing_urls" ]]; then
  echo "#### Missing"
  echo
  echo "\`\`\`"
  echo -e "$missing_urls"
  echo "\`\`\`"
  echo
fi

# Generate commit message based on missing and found URLs
if [[ -n "$missing_urls" ]] && [[ -n "$found_urls" ]]; then
  # If there are both missing and found URLs
  commit_message="[content-partial] add $build_hash info/content from ${build_date}Z"
elif [[ -n "$missing_urls" ]]; then
  # If there are only missing URLs
  commit_message="[content-missing] add $build_hash info from ${build_date}Z"
elif [[ -n "$found_urls" ]]; then
  # If all URLs are found
  commit_message="[content] add $build_hash content from ${build_date}Z"
fi

echo "$commit_message"

if [[ -n "$found_urls" ]]; then
  echo
  echo "You can try downloading the found URLs from WayBack Machine with:"
  echo "  wget --no-verbose --directory-prefix orig/ --force-directories --no-host-directories --cut-dirs 5 URLS"
fi

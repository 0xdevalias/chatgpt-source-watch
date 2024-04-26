#!/bin/bash

# Get the absolute path of the directory where this script is located
SCRIPT_DIR="$(dirname "$(grealpath "$0")")"

# Set the relative subfolder path
SUBFOLDER="$SCRIPT_DIR/../unpacked/"

# Navigate to the Git repository root
cd "$(git rev-parse --show-toplevel)"

echo "Checking for newly added files..."

# Get list of newly added files that are within the specific subfolder
new_files=$(git diff --name-only HEAD | grep "$(grealpath --relative-to="$(pwd)" "$SUBFOLDER")")
# echo "$new_files"

declare -a matching_files

for file in $new_files; do
  # Check the first 10 lines of each file for the specific pattern
  if head -n 10 "$file" | grep -q 'e.exports = JSON.parse('; then
    # echo "  $file"
    # head -n 6 $file
    matching_files+=("$file")
  fi
done

# Sort the array by extracting numbers and using them as sort keys
IFS=$'\n' sorted_files=($(printf '%s\n' "${matching_files[@]}" | sort -t '/' -k 5n))
unset IFS

echo "Language files (sorted):"
for file in "${sorted_files[@]}"; do
  echo "  $file"
done

#!/bin/bash

# List of URLs to check
urls=(
  "https://cdn.oaistatic.com/_next/static/chunks/TODO1.js"
  "https://cdn.oaistatic.com/_next/static/chunks/TODO2.js"
)

# Loop through each URL and check it with the Wayback Machine API
for url in "${urls[@]}"; do
  echo "Checking URL: $url"
  curl -s "http://archive.org/wayback/available?url=$url"
  echo
  echo
done

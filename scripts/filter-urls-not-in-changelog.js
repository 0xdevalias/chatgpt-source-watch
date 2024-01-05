#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   pbpaste | ./filter-urls-not-in-changelog.js | pbcopy

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// List of changelog filenames
const changelogFilenames = ['CHANGELOG.md', 'CHANGELOG-2023.md'];

// URL Prefixes
const urlPrefixes = ['https://chat.openai.com/', 'https://cdn.oaistatic.com/'];

// Load and combine content of all changelogs
const changelogDirectory = path.join(__dirname, '..');
const combinedChangelogContent = changelogFilenames
  .map((filename) => {
    const changelogPath = path.join(changelogDirectory, filename);
    return fs.existsSync(changelogPath)
      ? fs.readFileSync(changelogPath, 'utf8')
      : '';
  })
  .join('\n');

// Define a set to store all output URLs
const outputUrls = new Set();

// Function to remove the existing prefix and generate URL variations
function generateUrlVariations(url, prefixes) {
  // Identify and remove the existing prefix, if any
  let rawUrl = url;
  prefixes.forEach((prefix) => {
    if (url.startsWith(prefix)) {
      rawUrl = url.substring(prefix.length);
    }
  });

  // Generate variations with new prefixes
  const variations = prefixes.map((prefix) => prefix + rawUrl);
  variations.push(rawUrl); // Include the raw URL (without prefix)
  return variations;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

rl.on('line', function (inputUrl) {
  // Check if the URL has already been output
  if (!outputUrls.has(inputUrl)) {
    // Generate all possible URL variations
    const urlVariations = generateUrlVariations(inputUrl, urlPrefixes);

    // Check if any of the URL variations exist in the combined changelog content
    const urlExists = urlVariations.some((variation) =>
      combinedChangelogContent.includes(variation),
    );

    // Add the URL to the set
    if (!urlExists) {
      console.log(inputUrl);
      outputUrls.add(inputUrl);
    }
  }
});

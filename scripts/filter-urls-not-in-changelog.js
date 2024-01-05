#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   pbpaste | ./filter-urls-not-in-changelog.js | pbcopy

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// List of changelog filenames
const changelogFilenames = ['CHANGELOG.md', 'CHANGELOG-2023.md'];

// Load and combine content of all changelogs
const changelogDirectory = path.join(__dirname, '..');
const combinedChangelogContent = changelogFilenames
  .map(filename => {
    const changelogPath = path.join(changelogDirectory, filename);
    return fs.existsSync(changelogPath) ? fs.readFileSync(changelogPath, 'utf8') : '';
  })
  .join('\n');

// Define a set to store all output URLs
const outputUrls = new Set();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(inputUrl) {
  // Check if the URL has already been output
  if (!outputUrls.has(inputUrl)) {
    // Check if URL does not exist in combined changelog content
    if (!combinedChangelogContent.includes(inputUrl)) {
      console.log(inputUrl);

      // Add the URL to the set
      outputUrls.add(inputUrl);
    }
  }
});

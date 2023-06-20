#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   pbpaste | ./filter-urls-not-in-changelog.js | pbcopy

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Load CHANGELOG
const changelogPath = path.join(__dirname, 'CHANGELOG.md');
const changelogContent = fs.readFileSync(changelogPath, 'utf8');

// Define a set to store all output URLs
let outputUrls = new Set();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(inputUrl) {
  // Check if the URL has already been output
  if (!outputUrls.has(inputUrl)) {
    // check if URL does not exist in changelog
    if (!changelogContent.includes(inputUrl)) {
      console.log(inputUrl);

      // Add the URL to the set
      outputUrls.add(inputUrl);
    }
  }
});

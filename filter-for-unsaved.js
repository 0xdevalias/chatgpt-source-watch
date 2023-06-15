#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | ./filter-for-unsaved.js | pbcopy
//   pbpaste | ./filter-for-unsaved.js | pbcopy

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const basePath = path.join(__dirname, 'orig');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(rawInputPath) {
  const filePath = rawInputPath.replace('https://chat.openai.com/', '');
  const fullPath = path.join(basePath, filePath);

  // check if file does not exist
  if (!fs.existsSync(fullPath)) {
    // console.log(filePath);
    console.log(`https://chat.openai.com/${filePath}`);
  }
});

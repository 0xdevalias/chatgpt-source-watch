#!/usr/bin/env node

// TODO: Save these commands somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | pbcopy
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]' | pbcopy

const path = require('path');

global.self = {};

/**
 * Helper function to construct the path to the build manifest file
 * @param {string} buildHash - The build hash to use in the path
 * @return {string} - The full path to the build manifest file
 */
function getBuildManifestPath(buildHash) {
  return path.join(__dirname, '..', 'orig', '_next', 'static', buildHash, '_buildManifest.js');
}

/**
 * Helper function to extract build hash from URL
 * @param {string} url - The URL to a _buildManifest.js file
 * @return {string|null} - The extracted build hash or null if invalid
 */
function extractBuildHashFromURL(url) {
  const match = url.match(/_next\/static\/([^/]+)\/_buildManifest\.js/);
  return match ? match[1] : null;
}

// Get the input argument
const inputArg = process.argv[2];

// Validate the input argument
if (!inputArg) {
  console.error("Please provide a build hash or a URL to a _buildManifest.js file as an argument.");
  process.exit(1);
}

const buildHash = inputArg.startsWith('http') ? extractBuildHashFromURL(inputArg) : inputArg;

if (inputArg.startsWith('http') && !buildHash) {
  console.error("Invalid URL. Make sure it points to a _buildManifest.js file.");
  process.exit(1);
}

// Construct the full path to the build manifest file
const buildManifestPath = getBuildManifestPath(buildHash);

// Load the build manifest file
require(buildManifestPath);

// Output the JSON representation of the build manifest
const buildManifestJSON = JSON.stringify(self.__BUILD_MANIFEST, null, 2);
console.log(buildManifestJSON);

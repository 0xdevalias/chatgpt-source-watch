#!/usr/bin/env node

const path = require('path');
const fs = require('fs');

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

/**
 * Helper function to recursively find all strings starting with a given prefix in an object
 * @param {Object} obj - The object to search through
 * @param {string} prefix - The prefix to search for in strings
 * @return {Array<string>} - The array of strings starting with the given prefix
 */
function findStringsStartingWith(obj, prefix) {
  let results = [];
  for (const key in obj) {
    if (typeof obj[key] === 'string' && obj[key].startsWith(prefix)) {
      results.push(obj[key]);
    } else if (typeof obj[key] === 'object') {
      results = results.concat(findStringsStartingWith(obj[key], prefix));
    }
  }
  return results;
}

// Get the input arguments
const inputArg = process.argv[2];
const outputMode = process.argv.includes('--extract-urls') ? 'extract-urls' : 'json';

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

if (outputMode === 'extract-urls') {
  // Recursively find all strings starting with "static"
  const staticStrings = findStringsStartingWith(self.__BUILD_MANIFEST, 'static');

  // Deduplicate the static strings
  const uniqueStaticStrings = [...new Set(staticStrings)];

  // Map and join the unique static strings
  const mappedStrings = uniqueStaticStrings.map(s => `https://cdn.oaistatic.com/_next/${s}`).join('\n');

  // Output the result
  console.log(mappedStrings);

  // Optionally, you can also copy the result to the clipboard (uncomment if needed)
  // require('child_process').execSync(`echo "${mappedStrings}" | pbcopy`);
} else {
  // Output the basic JSON
  const buildManifestJSON = JSON.stringify(self.__BUILD_MANIFEST, null, 2);
  console.log(buildManifestJSON);
}

#!/usr/bin/env node

const path = require('path');

// TODO: Save these commands somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | pbcopy
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]' | pbcopy

global.self = {};

/**
 * Helper function to construct the path to the build manifest file
 * @param {string} chunkHash - The chunk hash to use in the path
 * @return {string} - The full path to the build manifest file
 */
function getBuildManifestPath(chunkHash) {
  return path.join(__dirname, '..', 'orig', '_next', 'static', chunkHash, '_buildManifest.js');
}

// const buildManifestPath = getBuildManifestPath('a3Jc7aP-UMfeR9s4-iLvW');
// const buildManifestPath = getBuildManifestPath('Sz5I5M8XqNP7c6HNKaN0U');
// const buildManifestPath = getBuildManifestPath('Wnd5NrsJwJ8L-68NTfmnl');
// const buildManifestPath = getBuildManifestPath('2zx-gqs4DHnXCij8pMcM3');
// const buildManifestPath = getBuildManifestPath('9rHv4XACEoIItIhKMAq4_');
// const buildManifestPath = getBuildManifestPath('kwYJPc99Lx-XLUrLes-Se');
const buildManifestPath = getBuildManifestPath('CTxpiEb45oE7hUCOWm4Jq');

require(buildManifestPath);

const buildManifestJSON = JSON.stringify(self.__BUILD_MANIFEST, null, 2);

console.log(buildManifestJSON)

#!/usr/bin/env node

// TODO: Save these commands somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | pbcopy
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]' | pbcopy

global.self = {};

// require('./orig/_next/static/a3Jc7aP-UMfeR9s4-iLvW/_buildManifest.js');
// require('./orig/_next/static/Sz5I5M8XqNP7c6HNKaN0U/_buildManifest.js');
// require('./orig/_next/static/Wnd5NrsJwJ8L-68NTfmnl/_buildManifest.js');
// require('./orig/_next/static/2zx-gqs4DHnXCij8pMcM3/_buildManifest.js');
require('./orig/_next/static/9rHv4XACEoIItIhKMAq4_/_buildManifest.js');

const buildManifestJSON = JSON.stringify(self.__BUILD_MANIFEST, null, 2);

console.log(buildManifestJSON)

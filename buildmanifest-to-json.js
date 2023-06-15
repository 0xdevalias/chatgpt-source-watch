#!/usr/bin/env node

// TODO: Save these commands somewhere useful:
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("_next/" + .) | .[]' | pbcopy
//   ./buildmanifest-to-json.js | jq -r '[.. | strings | select(startswith("static"))] | unique | map("https://chat.openai.com/_next/" + .) | .[]' | pbcopy

global.self = {};

// require('./orig/_next/static/a3Jc7aP-UMfeR9s4-iLvW/__buildManifest.js');
require('./orig/_next/static/Sz5I5M8XqNP7c6HNKaN0U/__buildManifest.js');

const buildManifestJSON = JSON.stringify(self.__BUILD_MANIFEST, null, 2);

console.log(buildManifestJSON)

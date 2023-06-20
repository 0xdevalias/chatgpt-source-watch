#!/usr/bin/env node

// TODO: Save these scripts somewhere useful:
//   pbpaste | ./unpack-files-from-orig.js

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const childProcess = require('child_process');

const basePath = path.join(__dirname, 'orig');
const destPath = path.join(__dirname, 'unpacked');

const urlPrefix = 'https://chat.openai.com/';
const pathPrefix = "_next";
const filesToReplaceHashInPath = ['_buildManifest.js', '_ssgManifest.js'];

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(rawInputPath) {
  // Ignore lines that do not start with urlPrefix or pathPrefix
  if (!rawInputPath.startsWith(urlPrefix) && !rawInputPath.startsWith(pathPrefix)) {
    return;
  }

  const origFilePath = rawInputPath.replace(urlPrefix, '');
  const origFullPath = path.join(basePath, origFilePath);
  const origFileNameWithHash = path.basename(origFullPath);
  const origDirectoryName = path.dirname(origFilePath);

  // Strip the hash from the directory name when needed
  const destDirectoryName = filesToReplaceHashInPath.includes(origFileNameWithHash)
    ? origDirectoryName.replace(/_next\/static\/[\w-]+/, '_next/static/[buildHash]')
    : origDirectoryName;

  // Use regex to strip the hash from the filename
  const destFileName = origFileNameWithHash.replace(/(-|\.)\w+(\.)/, '$2');

  const destFullPath = path.join(destPath, destDirectoryName, destFileName);

  if (fs.existsSync(origFullPath)) {
    // Create the necessary directories in ./unpacked if they don't exist
    fs.mkdirSync(path.dirname(destFullPath), { recursive: true });

    // Copy file to destPath, replacing if it already exists
    fs.copyFileSync(origFullPath, destFullPath);

    // Log the file that has been copied
    console.log(`Successfully unpacked: ${origFilePath}`);
  } else {
    // Output a warning if the file doesn't exist
    console.warn(`Warning: The file ${origFilePath} does not exist.`);
  }
});

rl.on('close', () => {
  // Message to say we are about to run prettier
  console.log("\nRunning Prettier on the unpacked .js files...");

  // Run prettier on all .js files in the unpacked directory
  childProcess.spawn('prettier', ['--write', `${destPath}/**/*.js`], { stdio: 'inherit' });
});

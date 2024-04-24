#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

let DEBUG = false; // Initial debug state

function displayUsage(scriptName) {
  console.log(`Usage: ${scriptName} <input-file> <output-file>
Options:
  --debug        Enable debug mode.
  -h, --help     Display this usage information.`);
}

function parseCommandLineArguments() {
  const scriptName = path.basename(process.argv[1]);
  const args = process.argv.slice(2);

  if (args.includes('-h') || args.includes('--help')) {
    displayUsage(scriptName);
    process.exit(0);
  }

  const debugFlagIndex = args.indexOf('--debug');
  if (debugFlagIndex !== -1) {
    DEBUG = true;
    args.splice(debugFlagIndex, 1); // Remove the --debug flag from the arguments
  }

  if (args.length !== 2) {
    displayUsage(scriptName);
    console.error('\nError: Invalid number of arguments provided.');
    process.exit(1);
  }

  const inputFilePath = args[0];
  const outputFilePath = args[1];

  let inputDiff;
  try {
    inputDiff = fs.readFileSync(inputFilePath, 'utf8');
  } catch (err) {
    console.error(`Error reading file: ${inputFilePath}\n${err.message}`);
    process.exit(1);
  }

  return { inputDiff, inputFilePath, outputFilePath };
}

function correctDiffHeaders(inputDiff) {
  const lines = inputDiff.split('\n');
  let correctedLines = [];
  let hunkLines = []; // To store lines of the current hunk
  let insideHunk = false;
  let hunkHeader = '';
  let actualOldLines = 0;
  let actualNewLines = 0;

  lines.forEach((line, index) => {
    if (line.startsWith('@@')) {
      if (insideHunk) {
        // Finish the previous hunk by updating its header and adding the lines
        correctedLines.push(replaceLineCounts(hunkHeader, actualOldLines, actualNewLines));
        correctedLines = correctedLines.concat(hunkLines);
        hunkLines = [];
        actualOldLines = 0;
        actualNewLines = 0;
      }
      // Start a new hunk
      hunkHeader = line;
      insideHunk = true;
    } else if (insideHunk) {
      if (line.startsWith('-')) {
        actualOldLines++;
      } else if (line.startsWith('+')) {
        actualNewLines++;
      } else if (line.startsWith(' ')) {
        actualOldLines++;
        actualNewLines++;
      }
      hunkLines.push(line);
    } else {
      correctedLines.push(line);
    }

    if (DEBUG && index % 100 === 0) {
      console.log(`Processing line ${index + 1}: ${line}`);
    }
  });

  // Finalize the last hunk if the file ends while inside a hunk
  if (insideHunk) {
    correctedLines.push(replaceLineCounts(hunkHeader, actualOldLines, actualNewLines));
    correctedLines = correctedLines.concat(hunkLines);
  }

  return correctedLines.join('\n');
}

function replaceLineCounts(header, actualOld, actualNew) {
  return header.replace(/-(\d+),\d+ \+(\d+),\d+/, `-$1,${actualOld} +$2,${actualNew}`);
}

function main() {
  const { inputDiff, inputFilePath, outputFilePath } = parseCommandLineArguments();

  console.log(`Reading diff from ${inputFilePath} and writing corrected diff to ${outputFilePath}`);

  const correctedData = correctDiffHeaders(inputDiff);

  fs.writeFileSync(outputFilePath, correctedData);
  console.log(`Diff successfully corrected and written to ${outputFilePath}`);
}

main();

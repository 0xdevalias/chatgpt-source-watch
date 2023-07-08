#!/usr/bin/env node

/**
 * This script is used to generate a changelog entry from a template.
 *
 * ChatGPT Ref: https://chat.openai.com/c/92a51424-ca37-4912-8f3e-865e4f5f625d
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const templatePath = path.join(__dirname, '..', 'CHANGELOG.template.md');
const changelogPath = path.join(__dirname, '..', 'CHANGELOG.md');

const buildHashPattern = /^[A-Za-z0-9\-_]{21}$/;
const webpackChunkPattern = /_next\/static\/chunks\/webpack-([a-zA-Z0-9]+)\.js/;
const sectionHeaderPattern = /(## \d{4}-\d{2}-\d{2}Z)/;
const missingSectionPattern = /\n*#### Missing[\s\S]*?(?=\n#{2,}|$)/g;
const naSectionPattern = /#### .+\n\n```\nN\/A\n```/g;

const userScriptTodoSectionPattern = /TODO \(anything that was originally noted\/captured by our userscript\)/;
const buildManifestTodoSectionPattern = /TODO \(anything that was captured after processing the _buildManifest.js to find all files regardless of whether we had loaded them\)/;
const webpackJsSectionPattern = /TODO \(relevant changes from the webpack\.js file\.\. usually it will only be \.css file changes I believe\)/;
const webpackHashTodoPattern = "TODOWEBPACKHASH"

// Check if the required command line arguments are provided
if (process.argv.length < 4 || process.stdin.isTTY) {
  console.error('Usage: echo -e "URL1\\nURL2\\n\\nURL3\\n\\nURL4\\nURL5" | node update-changelog.js [build-hash] [date] [--keep-missing]');
  console.error('Examples:');
  console.error('  echo -e "https://example.com/1.js\\n\\nhttps://example.com/2.js\\n\\nhttps://example.com/3.js" | node update-changelog.js QvBTYln7NSxjxlNyZ4qN0 2023-06-28Z');
  console.error('  echo -e "https://example.com/1.js\\n\\nhttps://example.com/2.js\\n\\nhttps://example.com/3.js" | node update-changelog.js QvBTYln7NSxjxlNyZ4qN0 2023-06-28Z --keep-missing');
  console.error('');
  console.error('Error: Please provide a newline-separated list of URLs via stdin and the required build-hash and date as command line arguments.');
  process.exit(1);
}

// Extract command line arguments
const buildHash = process.argv[2];
const dateInput = process.argv[3];
const keepMissing = process.argv.includes('--keep-missing');

// Validate the build hash format
if (!buildHashPattern.test(buildHash)) {
  console.error('Error: Invalid build hash format. Expected format is 20 characters containing alphanumeric characters, hyphens, or underscores (e.g. QvBTYln7NSxjxlNyZ4qN0).');
  process.exit(1);
}

// Parse and validate the date input
const parsedDate = new Date(dateInput);
if (isNaN(parsedDate.valueOf())) {
  console.error('Error: Invalid date format. Please enter a valid date.');
  process.exit(1);
}

// Reformat the date to the desired format (YYYY-MM-DDZ)
const formattedDate = parsedDate.toISOString().slice(0, 10) + 'Z';

// Initialize an empty array to store chunks of URLs from STDIN
const chunks = [];

// TODO: extract this function to a separate helpers file and then use it in unpack-files-from-orig.js as well
function stripHashFromPath(rawInputPath) {
  const filesWithHashInDir = ['_buildManifest.js', '_ssgManifest.js'];
  const specialCssPath = '_next/static/css';
  const specialCssFileName = 'miniCssF.css';

  const directoryName = path.dirname(rawInputPath);
  const fileNameWithHash = path.basename(rawInputPath);

  // Use a ternary operator to conditionally strip the hash from the directory name
  const strippedDirectoryName = filesWithHashInDir.includes(fileNameWithHash)
      ? directoryName.replace(/_next\/static\/[\w-]+/, '_next/static/[buildHash]')
      : directoryName;

  // Strip the hash from the filename and handle special cases for css files
  const strippedFileName = (directoryName.includes(specialCssPath) && path.extname(fileNameWithHash) === '.css')
      ? specialCssFileName
      : fileNameWithHash.replace(/[.-]\w+\./, '.');

  return path.join(strippedDirectoryName, strippedFileName);
}

const rl = readline.createInterface({
  input: process.stdin,
});

rl.on('line', (line) => {
  const trimmedLine = line.trim();

  // If trimmedLine is empty, start a new chunk and return
  if (trimmedLine === '') {
    chunks.push([]);
    return;
  }

  // If there are no chunks, start a new chunk
  if (chunks.length === 0) {
    chunks.push([]);
  }

  // Otherwise, add the line to the current chunk
  chunks[chunks.length - 1].push(trimmedLine);
});

rl.on('close', () => {
  if (!chunks.some((chunk) => chunk.length > 0)) {
    console.error("Error: STDIN was empty or did not contain any URLs");
    process.exit(1);
  }

  const template = fs.readFileSync(templatePath, "utf8");

  if (!template.trim()) {
    console.error("Error: The template file is empty.");
    process.exit(1);
  }

  // Extract webpack hash from chunk URL or set to null
  const webpackChunkUrl = chunks
    .flat()
    .find((url) => webpackChunkPattern.test(url));
  const webpackHash = webpackChunkUrl
    ? webpackChunkPattern.exec(webpackChunkUrl)[1]
    : null;

  let updatedTemplate = template
    .replace("YYYY-MM-DDZ", formattedDate)
    .replace("TODOBUILDHASH", buildHash);

  // Remove "Missing" sections if --keep-missing argument not supplied
  if (!keepMissing) {
    updatedTemplate = updatedTemplate.replace(missingSectionPattern, "\n");
  }

  // Flatten the chunks array and extract file paths prefixed with 'unpacked'
  const filePaths = chunks
    .flatMap((chunk) =>
      chunk.map((url) => {
        const rawPath = new URL(url).pathname;
        const strippedPath = stripHashFromPath(rawPath);

        return `  - \`unpacked${strippedPath}\``;
      })
    )
    .filter((path) => {
      const excludeKeywords = ["_ssgManifest"];
      return !excludeKeywords.some((keyword) => path.includes(keyword));
    })
    .sort((a, b) => {
      // Prioritized keywords in order
      const keywords = ["_buildManifest", "webpack", ".css"];

      // Sort by prioritized keywords
      for (let keyword of keywords) {
        if (a.includes(keyword) && !b.includes(keyword)) return -1;
        if (!a.includes(keyword) && b.includes(keyword)) return 1;
      }

      // Sort chunks by number
      const chunkNumberA = a.match(/chunks\/(\d+)/);
      const chunkNumberB = b.match(/chunks\/(\d+)/);
      if (chunkNumberA && chunkNumberB) {
        return Number(chunkNumberA[1]) - Number(chunkNumberB[1]);
      }

      // Sort pages and subpaths alphabetically
      const isPagePath = /pages\/[^/]+(\/.+)?/;
      if (isPagePath.test(a) && isPagePath.test(b)) {
        return a.localeCompare(b);
      }

      // Fallback: sort alphabetically
      return a.localeCompare(b);
    });

  // Replace placeholder in the template
  updatedTemplate = updatedTemplate.replace(
    "  - `TODO unpacked file paths here`",
    filePaths.join("\n")
  );

  const numberOfChunks = chunks.length;

  const replaceTodoSection = (regex, chunkIndex) => {
    if (numberOfChunks >= chunkIndex + 1) {
      updatedTemplate = updatedTemplate.replace(
        regex,
        chunks[chunkIndex].length ? chunks[chunkIndex].join("\n") : "N/A"
      );
    } else {
      updatedTemplate = updatedTemplate.replace(regex, "N/A");
    }
  };

  replaceTodoSection(userScriptTodoSectionPattern, 0);
  replaceTodoSection(buildManifestTodoSectionPattern, 1);
  replaceTodoSection(webpackJsSectionPattern, 2);

  // Post-processing to remove headers and code block when content is N/A
  updatedTemplate = updatedTemplate.replace(naSectionPattern, 'N/A');

  if (webpackHash) {
    updatedTemplate = updatedTemplate.replace(webpackHashTodoPattern, webpackHash);
  } else {
    console.warn("Warning: No webpack hash found in the URLs.");

    if (numberOfChunks >= 3) {
      console.warn("The URLs in the third chunk are:");
      console.warn(chunks[2].join("\n"));
    }
  }

  const changelog = fs.readFileSync(changelogPath, "utf8");
  if (!changelog.trim()) {
    console.error("Error: The changelog file is empty.");
    process.exit(1);
  }

  const updatedChangelog = changelog.replace(
    sectionHeaderPattern,
    `${updatedTemplate}\n$1`
  );
  fs.writeFileSync(changelogPath, updatedChangelog);
  console.log("Changelog updated!");

  console.log(`Git commit message: add ${buildHash} from ${formattedDate}`);
});

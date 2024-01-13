#!/usr/bin/env node

// TODO: refactor processUrl/similar to collect the URLs to be printed at the end rather than directly console.log'ing them

// TODO: refactor --json mode to check that it's an array, and throw an error if not

// TODO: refactor --json mode to return filtered json array rather than extracting the URLs

// TODO: refactor arg parsing to use node:util parseArgs: https://nodejs.org/api/util.html#utilparseargsconfig

const fs = require("fs");
const path = require("path");
const { createInterface } = require("readline");
const { once } = require("events");

// List of changelog filenames
const changelogFilenames = ["CHANGELOG.md", "CHANGELOG-2023.md"];

// URL Prefixes
const urlPrefixes = ["https://chat.openai.com/", "https://cdn.oaistatic.com/"];

// Define a set to store all output URLs for de-duplication
const outputUrls = new Set();

const displayUsage = (scriptName) => {
  console.log(`Usage: ${scriptName} [--json]`);
  console.log('--json: Process input as JSON array of objects with "url" keys');
  console.log("-h, --help: Display this help message");
};

const parseArguments = () => {
  const scriptName = path.basename(process.argv[1]);
  const args = process.argv.slice(2);

  if (args.includes("-h") || args.includes("--help")) {
    displayUsage(scriptName);
    process.exit(0);
  }

  const isJsonMode = args.includes("--json");
  if (isJsonMode) {
    // Remove the --json flag from the arguments
    args.splice(args.indexOf("--json"), 1);
  }

  if (args.length > 0) {
    displayUsage(scriptName);
    console.error("\nError: Invalid arguments provided.");
    process.exit(1);
  }

  return { isJsonMode };
};

const readAllStdin = async () => {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false,
    crlfDelay: Infinity,
  });

  const lines = [];
  rl.on("line", (line) => lines.push(line));
  await once(rl, "close");

  return lines;
};

const main = async () => {
  const { isJsonMode } = parseArguments();

  const combinedChangelogContent =
    loadAndCombineChangelogContent(changelogFilenames);

  const inputData = await readAllStdin();
  if (isJsonMode) {
    processJsonInput(inputData, combinedChangelogContent);
  } else {
    if (looksLikeJson(inputData)) {
      console.error(
        "Error: Input data looks like JSON. Did you forget to use the --json flag?"
      );
      process.exit(1);
    }

    inputData.forEach((url) => processUrl(url, combinedChangelogContent));
  }
};

const loadAndCombineChangelogContent = (filenames) => {
  const directory = path.join(__dirname, "..");
  return filenames
    .map((filename) => {
      const changelogPath = path.join(directory, filename);
      return fs.existsSync(changelogPath)
        ? fs.readFileSync(changelogPath, "utf8")
        : "";
    })
    .join("\n");
};

const looksLikeJson = (inputData) => {
  const firstNonEmptyNonCommentLine = inputData.find((line) => {
    const trimmedLine = line.trim();
    return (
      trimmedLine &&
      !trimmedLine.startsWith("//") &&
      !trimmedLine.startsWith("#")
    );
  });

  if (!firstNonEmptyNonCommentLine) return false;

  return (
    firstNonEmptyNonCommentLine.startsWith("{") ||
    firstNonEmptyNonCommentLine.startsWith("[")
  );
};

const processJsonInput = (inputLines, combinedChangelogContent) => {
  const inputData = inputLines.join("\n");

  try {
    const jsonInput = JSON.parse(inputData);
    jsonInput.forEach((item) => {
      processUrl(item?.url, combinedChangelogContent);
    });
  } catch (err) {
    console.error("Failed to parse JSON input:", err);
  }
};

const processUrl = (inputUrl, combinedChangelogContent) => {
  const url = inputUrl.trim();

  if (!isValidUrl(url)) return;
  if (outputUrls.has(url)) return;

  const urlExistsInChangelog = generateUrlVariations(url, urlPrefixes).some(
    (variation) => combinedChangelogContent.includes(variation)
  );

  if (!urlExistsInChangelog) {
    outputUrls.add(url);
    console.log(url);
  }
};

const isValidUrl = (url) => {
  return url && typeof url === "string" && url.startsWith("http");
};

const generateUrlVariations = (inputUrl, prefixes) => {
  const url = inputUrl.trim();

  // Remove any existing prefix from the URL
  const urlWithoutPrefixes = prefixes.reduce((acc, prefix) => {
    return url.startsWith(prefix) ? url.substring(prefix.length) : acc;
  }, url);

  return prefixes.map((prefix) => `${prefix}${urlWithoutPrefixes}`);
};

// Entry point
main().catch((err) => {
  console.error("error:", err);
});

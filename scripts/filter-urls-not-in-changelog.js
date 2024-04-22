#!/usr/bin/env node

// TODO: add an option that allows us to choose whether we filter the json (as json), or just extract the URLs from it (and return them as newline text)

const { parseArgs } = require("util");
const fs = require("fs");
const path = require("path");
const { createInterface } = require("readline");
const { once } = require("events");

// List of changelog filenames
const changelogFilenames = ["CHANGELOG.md", "CHANGELOG-2023.md"];

// URL Prefixes
const urlPrefixes = ["https://chat.openai.com/", "https://cdn.oaistatic.com/"];

// Define a set to store all output URLs for de-duplication
const processedUrls = new Set();

const displayUsage = (scriptName) => {
  console.log(`Usage: ${scriptName} [--json] [--json-with-urls]`);
  console.log('    --json: Process input as JSON array of objects with "url" keys');
  console.log('    --json-with-urls: Output both the filtered JSON and a list of URLs [implies --json]');
  console.log("-h, --help: Display this help message");
};

const parseArguments = () => {
  const scriptName = path.basename(process.argv[1]);

  const parsedArgs = (() => {
    try {
      return parseArgs({
        strict: true,
        allowPositionals: false,
        options: {
          json: {
            type: 'boolean',
            default: false,
          },
          'json-with-urls': {
            type: 'boolean',
            default: false,
          },
          help: {
            type: 'boolean',
            short: 'h',
          },
        }
      });
    } catch (error) {
      displayUsage(scriptName);
      console.error("\nError: Invalid arguments provided.", error.message);
      process.exit(1);
    }
  })();

  if (parsedArgs.values.help) {
    displayUsage(scriptName);
    process.exit(0);
  }

  const isJsonWithUrlsMode = parsedArgs.values['json-with-urls'];

  // Automatically enable JSON mode if --json-with-urls is specified
  const isJsonMode = parsedArgs.values.json || isJsonWithUrlsMode;

  return { isJsonMode, isJsonWithUrlsMode };
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
  const { isJsonMode, isJsonWithUrlsMode } = parseArguments();

  const inputData = await readAllStdin();

  if (!isJsonMode && looksLikeJson(inputData)) {
    console.error(
      "Error: Input data looks like JSON. Did you forget to use the --json flag?"
    );
    process.exit(1);
  }

  const combinedChangelogContent =
    loadAndCombineChangelogContent(changelogFilenames);

  const outputUrls = isJsonMode
    ? processJsonInput(inputData, combinedChangelogContent)
    : inputData
        .map((url) => processUrl(url, combinedChangelogContent))
        .filter((url) => !!url);

  printUrls(outputUrls);

  if (isJsonWithUrlsMode) {
    printUrls(outputUrls.map(obj => obj.url))
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
  if (!looksLikeJson(inputLines)) {
    console.warn(
      "Warning: Input data doesn't look like JSON. Are you sure you want to use --json mode on this data?"
    );
  }

  const inputData = inputLines.join("\n");

  const jsonInput = JSON.parse(inputData);

  if (!Array.isArray(jsonInput)) {
    throw new Error("JSON input is not an array");
  }

  // TODO: add an option that allows us to choose whether we filter the json (as json), or just extract the URLs from it (and return them as newline text)
  return jsonInput
    .map((item) => ({
      ...item,
      url: processUrl(item?.url, combinedChangelogContent),
    }))
    .filter(({ url }) => !!url);
};

const processUrl = (inputUrl, combinedChangelogContent) => {
  if (!isValidUrl(inputUrl)) return null;

  const url = cleanUrl(inputUrl)

  if (processedUrls.has(url)) return null;

  const urlExistsInChangelog = generateUrlVariations(url, urlPrefixes).some(
    (variation) => combinedChangelogContent.includes(variation)
  );

  if (urlExistsInChangelog) return null;

  // Used for de-duplication
  processedUrls.add(url);

  return url;
};

const isValidUrl = (url) => {
  return url && URL.canParse(url) && url.trim().startsWith("http");
};

const cleanUrl = (url) => {
  const parsedUrl = new URL(url)
  parsedUrl.search = ''
  return parsedUrl.href
}

const generateUrlVariations = (inputUrl, prefixes) => {
  const url = inputUrl.trim();

  // Remove any existing prefix from the URL
  const urlWithoutPrefixes = prefixes.reduce((acc, prefix) => {
    return url.startsWith(prefix) ? url.substring(prefix.length) : acc;
  }, url);

  return prefixes.map((prefix) => `${prefix}${urlWithoutPrefixes}`);
};

const printUrls = (urls) => {
  urls.forEach((url) => {
    if (url) console.log(url);
  });
};

// Entry point
main().catch((err) => {
  console.error("error:", err);
});

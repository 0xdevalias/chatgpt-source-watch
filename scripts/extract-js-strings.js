#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;

let DEBUG = false; // Initial debug state

function displayUsage(scriptName) {
  console.log(`Usage: ${scriptName} <file-path>
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
    args.splice(debugFlagIndex, 1);
  }

  if (args.length !== 1) {
    displayUsage(scriptName);
    console.error('\nError: Invalid number of arguments provided.');
    process.exit(1);
  }

  const filePath = args[0];

  let code;
  try {
    code = fs.readFileSync(filePath, 'utf8');
  } catch (err) {
    console.error(`Error reading file: ${filePath}\n${err.message}`);
    process.exit(1);
  }

  return { code };
}

function parseCodeToAST(code) {
  return parser.parse(code, {
    sourceType: 'module',
  });
}

function extractStrings(ast) {
  const strings = [];
  traverse(ast, {
    StringLiteral: ({ node }) => {
      strings.push(node.value);
    },
    TemplateLiteral: ({ node }) => {
      node.quasis.forEach((element) => {
        strings.push(element.value.cooked);
      });
    },
  });
  return strings;
}

function main() {
  const { code } = parseCommandLineArguments();
  const ast = parseCodeToAST(code);
  const strings = extractStrings(ast);

  if (DEBUG) {
    console.log('[DEBUG] Extracted Strings:', strings);
  } else {
    console.log(strings.join('\n'));
  }
}

main();

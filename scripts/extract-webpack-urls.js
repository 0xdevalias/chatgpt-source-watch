#!/usr/bin/env node

// The structure of the webpack.js chunk file seems to be...
//
// - a top level IIFE
// - a few vars declared
// - a function that seems to set up some exports stuff (in this case, called b)
// - a number of statements joined together using , as a seperator. Each of these things seems to be calling or defining something on the previously defined function (b)
//   - The function that has all of the hash chunks in it (b.u in this case) seems to be the 12th of these (I think), joined statements; it is an assignment of a function that takes a single parameter, it should only have a return statement that starts with a string "static/chunks/", and does some string concatenation with some objects and the parameter passed in
//   - We then also want the next function (in this case b.miniCssF, which seems to be the 13th joined statement) which is assigned to a function that takes a single parameter, this just returns a string
//   - Finally we want the URL prefix string assigned (in this case to b.p, which seems to be the 23rd joined statement)

// TODO: create a helper function that would simplify accessing through like this? (eg. checking nested expressions and/or return statements)
//   miniCssFNode.right.body.body.find(node => node.type === 'ReturnStatement').argument.value;

const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');

let DEBUG = false; // Initial debug state

/**
 * Displays usage information for the script. Outputs the correct way to call the script along with available options.
 *
 * @param {string} scriptName - The name of the script for which to display usage information.
 */
function displayUsage(scriptName) {
  console.log(`Usage: ${scriptName} <file-path>
Options:
  --debug        Enable debug mode.
  -h, --help     Display this usage information.`);
}

/**
 * Parses command line arguments, reads the specified file, and returns its content.
 * Exits the process on argument errors or file read errors.
 *
 * @returns {Object} An object containing:
 *                   - code: The source code read from the file.
 */
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

/**
 * Main entry point of the script. Parses input, analyzes data, and outputs results.
 */
function main() {
  const { code } = parseCommandLineArguments();
  const ast = parseCodeToAST(code);

  const mainIIFEBlockStatement = findMainIIFEBlockStatement(ast);
  if (!mainIIFEBlockStatement) {
    throw new Error('Failed to find mainIIFEBlockStatement');
  }

  const iifeBody = mainIIFEBlockStatement.body;

  // These are the 3 main 'sections' within the webpack.js IIFE
  const iifeNodeTypes = iifeBody.map((node) => node.type).join();
  const expectedIifeNodeTypes = [
    'VariableDeclaration',
    'FunctionDeclaration',
    'ExpressionStatement',
  ].join();
  if (iifeNodeTypes !== expectedIifeNodeTypes) {
    throw new Error(
      `iifeBody has unexpected structure:\n  expected=${expectedIifeNodeTypes}\n  actual=${iifeNodeTypes}`
    );
  }

  const variableIdentifiers = iifeBody[0].declarations.map(
    (node) => node.id.name
  );
  const functionName = iifeBody[1].id.name;
  const joinedExpressions = iifeBody[2].expression.expressions;

  DEBUG &&
    console.log('[DEBUG]', {
      variableIdentifiers,
      functionName,
      joinedExpressions: joinedExpressions.map((node) => node.type),
    });

  // Find Chunk Mappings node
  // const chunkMappingsNode = joinedExpressions[11];
  const chunkMappingsNode = findChunkMappingsNode(joinedExpressions);
  DEBUG && console.log('[DEBUG] chunkMappingsNode', chunkMappingsNode);
  if (!chunkMappingsNode) {
    throw new Error('Failed to find chunkMappingsNode');
  }

  // Find miniCssF node
  // const miniCssFNode = joinedExpressions[12];
  const miniCssFNode = findMiniCssFNode(joinedExpressions, functionName);
  DEBUG && console.log('[DEBUG] miniCssFNode', miniCssFNode);
  if (!miniCssFNode) {
    throw new Error('Failed to find miniCssFNode');
  }

  // Find chunk URL prefix node
  // const chunkUrlPrefixNode = joinedExpressions[22];
  const chunkUrlPrefixNode = findChunkUrlPrefixNode(joinedExpressions);
  DEBUG && console.log('[DEBUG] chunkUrlPrefixNode', chunkUrlPrefixNode);
  if (!chunkUrlPrefixNode) {
    throw new Error('Failed to find chunkUrlPrefixNode');
  }

  // Extract the values we want from previously found nodes
  const chunkUrlPrefix = extractChunkUrlPrefix(chunkUrlPrefixNode);
  const { cssPaths: miniCssFPaths } = extractMiniCssFPaths(miniCssFNode);
  const { chunkPaths, ...chunkExtras } = extractChunkPaths(chunkMappingsNode);

  DEBUG &&
    console.log('[DEBUG]', {
      chunkUrlPrefix,
      miniCssFPaths,
      chunkPaths,
      chunkExtras,
    });

  // Combine the extracted data to produce our outputs
  const chunkUrls = chunkPaths.map(
    (chunkPath) => `${chunkUrlPrefix}${chunkPath}`
  );

  const miniCssFUrls = miniCssFPaths.map(
    (cssPath) => `${chunkUrlPrefix}${cssPath}`
  );

  DEBUG &&
    console.log('[DEBUG]', {
      chunkUrlPrefix,
      chunkUrls,
      miniCssFUrls,
    });

  // Display the extracted URLS
  console.log([...chunkUrls, ...miniCssFUrls].join('\n'));
}

/**
 * Parses a string of code into an Abstract Syntax Tree (AST).
 * Assumes the code is in module format.
 *
 * @param {string} code - The source code to parse.
 * @returns {Object} - The generated AST from the provided code.
 */
function parseCodeToAST(code) {
  return parser.parse(code, {
    sourceType: 'module',
  });
}

/**
 * Checks if an AST node is a function (FunctionExpression or FunctionDeclaration).
 *
 * @param {Object} node - The AST node to be evaluated.
 * @returns {boolean} - True if the node is a function, otherwise false.
 *
 * @TODO should we use @babel/types instead of this?
 */
function isFunctionNode(node) {
  return (
    node &&
    (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration')
  );
}

/**
 * Searches the provided Abstract Syntax Tree (AST) for the main Immediately Invoked Function Expression (IIFE) block statement.
 * It iterates through the top-level nodes in the AST, identifying the IIFE based on its structure as either a CallExpression
 * or a UnaryExpression with a CallExpression. The function returns the BlockStatement of the IIFE if found.
 *
 * AST Structure:
 *   Program .body -> ExpressionStatement .expression ->
 *     ((CallExpression) || (UnaryExpression .argument -> CallExpression) .callee) ->
 *       FunctionExpression .body -> BlockStatement .body[] ->
 *         VariableDeclaration .declarations[] -> VariableDeclarator ...
 *         FunctionDeclaration .id -> Identifier .name -> functionName
 *         ExpressionStatement .expression -> SequenceExpression .expressions[] -> ...
 *
 * @param {Object} ast - The Abstract Syntax Tree in which to search for the main IIFE.
 * @returns {Object|null} - The BlockStatement of the IIFE if found, otherwise null.
 */
function findMainIIFEBlockStatement(ast) {
  for (const node of ast.program.body) {
    if (node.type === 'ExpressionStatement') {
      let callee = null;

      if (node.expression.type === 'CallExpression') {
        callee = node.expression.callee;
      } else if (
        node.expression.type === 'UnaryExpression' &&
        node.expression.argument.type === 'CallExpression'
      ) {
        callee = node.expression.argument.callee;
      }

      if (isFunctionNode(callee) && callee.body.type === 'BlockStatement') {
        return callee.body; // Return the BlockStatement node if found
      }
    }
  }

  return null; // Return null if the IIFE is not found
}

/**
 * Finds the MiniCSSF node in the joined expressions.
 *
 * AST Layout:
 *   AssignmentExpression
 *     .left -> MemberExpression
 *       .object -> Identifier .name -> functionName
 *       .property -> Identifier .name -> 'miniCssF'
 *     .right -> FunctionExpression .body -> BlockStatement .body[] -> ReturnStatement .argument -> ...
 *
 * @param {Array} joinedExpressions - The expressions joined in the AST.
 * @param {string} functionName - The name of the function to find.
 * @returns {Object|null} - The found MiniCSSF node or null if not found.
 */
function findMiniCssFNode(joinedExpressions, functionName) {
  return joinedExpressions.find(
    (expression) =>
      expression.type === 'AssignmentExpression' &&
      expression.left.type === 'MemberExpression' &&
      expression.left.object.name === functionName &&
      expression.left.property.name === 'miniCssF'
  );
}

/**
 * Extracts the miniCssF path from a miniCssF node.
 *
 * AST Layout:
 *   AssignmentExpression
 *     .left -> MemberExpression
 *       .object -> Identifier .name -> functionName
 *       .property -> Identifier .name -> 'miniCssF'
 *     .right -> FunctionExpression .body -> BlockStatement .body[] -> ReturnStatement .argument ->
 *      ... (either be a Single path or a Composite path)
 *
 *   Single path:
 *     -> StringLiteral .value
 *
 *   Composite path (string + mapped object + string):
 *     -> BinaryExpression
 *       .left -> BinaryExpression ->
 *         .left -> StringLiteral .value
 *         .right -> MemberExpression .object -> ObjectExpression .properties[] -> ObjectProperty
 *           .key -> NumericLiteral .value
 *           .value -> StringLiteral .value
 *       .right -> StringLiteral .value
 *
 * @param {Object} miniCssFNode - The MiniCSSF node in the AST.
 *
 * @returns {{
 *   cssPaths: string[],
 *   pathPrefix?: string,
 *   pathSuffix?: string,
 *   chunkPathMappings?: Object.<number, {chunkHash: string, cssPath: string}>}
 * } Depending on the node's structure:
 *   - Single path: { cssPaths: [singlePath] }
 *   - Composite path: { cssPaths, pathPrefix, pathSuffix, chunkPathMappings }
 *
 * @throws {Error} If the MiniCSSF node structure is not recognized.
 */
function extractMiniCssFPaths(miniCssFNode) {
  const returnStatement = miniCssFNode.right.body.body.find(
    (node) => node.type === 'ReturnStatement'
  );

  // This is for a single CSS chunk
  const isSinglePath = returnStatement.argument.type === 'StringLiteral';

  // This is for multiple CSS chunks
  const isCompositePath =
    returnStatement.argument.type === 'BinaryExpression' &&
    returnStatement.argument.left.type === 'BinaryExpression' &&
    returnStatement.argument.left.left.type === 'StringLiteral' &&
    returnStatement.argument.left.operator === '+' &&
    returnStatement.argument.left.right.type === 'MemberExpression' &&
    returnStatement.argument.left.right.object.type === 'ObjectExpression' &&
    returnStatement.argument.operator === '+' &&
    returnStatement.argument.right.type === 'StringLiteral';

  if (isSinglePath) {
    return {
      cssPaths: [returnStatement.argument.value],
    };
  } else if (isCompositePath) {
    const pathPrefix = returnStatement.argument.left.left.value;
    const pathSuffix = returnStatement.argument.right.value;

    const chunkPathMappings =
      returnStatement.argument.left.right.object.properties.reduce(
        (acc, prop) => {
          const chunkId = prop.key.value;
          const chunkHash = prop.value.value;
          const cssPath = `${pathPrefix}${chunkHash}${pathSuffix}`;

          return {
            ...acc,
            [chunkId]: {
              chunkHash,
              cssPath,
            },
          };
        },
        {}
      );

    const cssPaths = Object.values(chunkPathMappings).map(
      ({ cssPath }) => cssPath
    );

    return {
      pathPrefix,
      pathSuffix,
      chunkPathMappings,
      cssPaths,
    };
  } else {
    throw new Error(
      '[extractMiniCssFPaths] Invalid/unknown miniCssF structure'
    );
  }
}

/**
 * Finds the Chunk URL Prefix node in the joined expressions.
 *
 * AST Layout:
 *   AssignmentExpression
 *     .left -> ...
 *     .right -> Literal .value -> the chunk URL prefix
 *
 * @param {Array} joinedExpressions - The expressions joined in the AST.
 * @returns {Object|null} - The found Chunk URL Prefix node or null if not found.
 */
function findChunkUrlPrefixNode(joinedExpressions) {
  return joinedExpressions.find(
    (node) =>
      node.type === 'AssignmentExpression' &&
      node.right.type === 'StringLiteral' &&
      node.right.value.startsWith('http')
  );
}

/**
 * Extracts the Chunk URL Prefix from a Chunk URL Prefix node.
 *
 * AST Layout:
 *   @see findChunkUrlPrefixNode for AST layout of chunkUrlPrefixNode
 *
 * @param {Object} chunkUrlPrefixNode - The Chunk URL Prefix node in the AST.
 * @returns {string} - The extracted Chunk URL Prefix.
 */
function extractChunkUrlPrefix(chunkUrlPrefixNode) {
  return chunkUrlPrefixNode.right.value;
}

/**
 * Finds the Chunk Mappings node in the joined expressions.
 *
 * AST Layout:
 *   AssignmentExpression
 *     .left -> ...
 *     .right -> FunctionExpression .body -> BlockStatement .body[0] -> ReturnStatement .argument ->
 *       BinaryExpression
 *         .left -> BinaryExpression
 *         |  .left -> BinaryExpression
 *         |  |  .left -> BinaryExpression
 *         |  |  |  .left -> StringLiteral .value -> 'static/chunks/'
 *         |  |  |  .right -> LogicalExpression
 *         |  |  |    .left  -> MemberExpression .object -> ObjectExpression .properties[] -> ObjectProperty
 *         |  |  |    |  .key -> NumericLiteral .value -> the chunk number
 *         |  |  |    |  .value -> StringLiteral .value -> the chunk name override (or if not present here, it generally falls back to using the chunk number directly)
 *         |  |  |    .right -> Identifier .name -> this wrapping function's single argument
 *         |  |  .right -> StringLiteral .value -> '.'
 *         |  .right -> MemberExpression .object -> ObjectExpression .properties[] -> ObjectProperty
 *         |    .key -> NumericLiteral .value -> the chunk number
 *         |    .value -> StringLiteral .value -> the chunk hash
 *         .right -> StringLiteral .value -> '.js'
 *
 * @param {Array} joinedExpressions - The expressions joined in the AST.
 * @returns {Object|null} - The found Chunk Mappings node or null if not found.
 */
function findChunkMappingsNode(joinedExpressions) {
  return joinedExpressions.find(
    (expression) =>
      expression.type === 'AssignmentExpression' &&
      expression.right.type === 'FunctionExpression' &&
      expression.right.body.body[0]?.type === 'ReturnStatement' &&
      expression.right.body.body[0].argument?.type === 'BinaryExpression' &&
      expression.right.body.body[0].argument.left?.left?.left?.left?.type ===
        'StringLiteral' &&
      expression.right.body.body[0].argument.left.left.left.left.value ===
        'static/chunks/' &&
      expression.right.body.body[0].argument.right?.type === 'StringLiteral' &&
      expression.right.body.body[0].argument.right.value === '.js'
  );
}

/**
 * Extracts chunk paths from a Chunk Mappings node. This function navigates through the BinaryExpression
 * inside the Chunk Mappings node to extract essential information such as base path, chunk mappings,
 * chunk name/hash joiner, chunk hashes, and combines them to form the full chunk paths.
 *
 * AST Layout:
 *   @see findChunkMappingsNode for AST layout of chunkMappingsNode
 *
 * @param {Object} chunkMappingsNode - The Chunk Mappings node obtained from the AST.
 * @returns {Object} An object containing:
 *                    - basePath: Base path for the chunks.
 *                    - chunkMappings: Object mapping chunk numbers to chunk names.
 *                    - chunkNameHashJoiner: Joiner symbol (usually '.') between chunk name and hash.
 *                    - chunkHashes: Object mapping chunk numbers to chunk hashes.
 *                    - chunkExtension: File extension for the chunks.
 *                    - chunkPaths: Array of full paths for each chunk.
 */
function extractChunkPaths(chunkMappingsNode) {
  const returnStatementValue =
    chunkMappingsNode?.right?.body?.body[0]?.argument;

  if (!returnStatementValue) {
    throw new Error(
      'Invalid chunkMappingsNode structure: missing return statement value'
    );
  }

  // Extract base path 'static/chunks/'
  const basePath = returnStatementValue.left?.left?.left?.left?.value;
  if (!basePath) {
    throw new Error('Invalid chunkMappingsNode structure: missing base path');
  }

  // Extract chunk number-name mappings
  const chunkMappingProperties =
    returnStatementValue.left?.left?.left?.right?.left?.object?.properties;
  if (!chunkMappingProperties) {
    throw new Error(
      'Invalid chunkMappingsNode structure: missing chunk mappings'
    );
  }
  const chunkMappings = chunkMappingProperties.reduce((acc, prop) => {
    acc[prop.key.value] = prop.value.value;
    return acc;
  }, {});

  // Extract chunk name/hash joiner '.'
  const chunkNameHashJoiner = returnStatementValue.left?.left?.right?.value;
  if (!chunkNameHashJoiner) {
    throw new Error(
      'Invalid chunkMappingsNode structure: missing chunk name/hash joiner'
    );
  }

  // Extract chunk number-hash mappings
  const chunkHashProperties =
    returnStatementValue.left?.right?.object?.properties;
  if (!chunkHashProperties) {
    throw new Error(
      'Invalid chunkMappingsNode structure: missing chunk hashes'
    );
  }
  const chunkHashes = chunkHashProperties.reduce((acc, prop) => {
    acc[prop.key.value] = prop.value.value;
    return acc;
  }, {});

  const chunkExtension = returnStatementValue.right?.value;
  if (!chunkExtension) {
    throw new Error(
      'Invalid chunkMappingsNode structure: missing chunk extension'
    );
  }

  // Combine to form full paths
  const chunkPaths = Object.keys(chunkHashes).reduce((acc, chunkNumber) => {
    // Use chunkMappings name if available, otherwise fallback to chunkNumber
    const chunkName = chunkMappings[chunkNumber] || chunkNumber;
    const chunkHash = chunkHashes[chunkNumber];
    const fullPath = `${basePath}${chunkName}${chunkNameHashJoiner}${chunkHash}${chunkExtension}`;
    return [...acc, fullPath];
  }, []);

  return {
    basePath,
    chunkMappings,
    chunkNameHashJoiner,
    chunkHashes,
    chunkExtension,
    chunkPaths,
  };
}

// Execute the main function of the script.
main();

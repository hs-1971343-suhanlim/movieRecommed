/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const path = require('path');
const {parseFile} = require('../../parsers/utils');
const FlowParser = require('../../parsers/flow');
const TypeScriptParser = require('../../parsers/typescript');

function parseFiles(files: Array<string>) {
  files.forEach(filename => {
    const isTypeScript =
      path.extname(filename) === '.ts' || path.extname(filename) === '.tsx';

    console.log(
      filename,
      JSON.stringify(
        parseFile(
          filename,
          isTypeScript ? TypeScriptParser.buildSchema : FlowParser.buildSchema,
        ),
        null,
        2,
      ),
    );
  });
}

module.exports = parseFiles;

'use strict';

const fs = require('fs');
const parse = require('../parsers/stylesheet');

/**
 * Parse a listing of files for documentation.
 * @param {Array.<String>} files
 */
module.exports = (files) => {
  for (const f of files) {
    const file = fs.readFileSync(f, { encoding: 'utf8' });
    const parsed = parse(file); // eslint-disable-line no-unused-vars
  }
};

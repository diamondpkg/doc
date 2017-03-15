'use strict';

const fs = require('fs');
const path = require('path');

module.exports = (program) => {
  if (typeof program !== 'object') program = {};

  const config = {};
  const resolved = path.resolve(program.config || 'diamond.doc.json');
  const file = fs.readFileSync(resolved);
  const configFile = JSON.parse(file);

  for (const key of ['input', 'output', 'template']) {
    config[key] = program[key] || configFile[key];
    if (typeof config[key] === 'undefined') throw new RangeError(`option ${key} was not specified`);
  }

  return config;
};

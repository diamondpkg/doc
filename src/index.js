#! /usr/bin/env node

'use strict';

const program = require('commander');
const version = require('../package.json').version;
const path = require('path');

const loadStylesheets = require('./functions/loadStylesheets');
const loadConfig = require('./functions/loadConfig');
const parseFiles = require('./functions/parseFiles');

program
  .version(version)
  .option('-i, --input <directory>', 'Input directory.')
  .option('-o, --output <directory>', 'Output directory.')
  .option('-t, --template <name>', 'Documentation generation template.')
  .option('-c, --config <filename>', 'Config file.')
  .parse(process.argv);

const config = loadConfig(program);
loadStylesheets(path.resolve(config.input))
  .then(parseFiles);

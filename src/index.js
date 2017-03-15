'use strict';

const program = require('commander');
const loadStylesheets = require('./functions/loadStylesheets');
const loadConfig = require('./functions/loadConfig');

program
    .version('0.0.0')
    .option('-i, --input <directory>', 'Input directory.')
    .option('-o, --output <directory>', 'Output directory.')
    .option('-t, --template <name>', 'Documentation generation template.')
    .option('-c, --config <filename>', 'Config file.')
    .parse(process.argv);

console.log(program.input);
console.log(program.output);
console.log(program.template);
console.log(program.config);

const config = loadConfig(program);
loadStylesheets(config.input);
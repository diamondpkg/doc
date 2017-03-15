'use strict';

const fs = require('fs');
const path = require('path');

module.exports = program => {
    let config = {
        input: program.input,
        output: program.output,
        template: program.template
    };

    try {
        const configFile = fs.readFileSync(path.resolve(program.config || 'diamond.doc.json'));
        Object.assign(JSON.parse(configFile), config);
    } catch (e) {
        // do nothing
    }

    return config;
};
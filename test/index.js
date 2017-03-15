'use strict';

const exec = require('child_process').exec;
const path = require('path');

exec(`ddoc -c ${path.join(__dirname, 'diamond.doc.json')}`, (err, stdout, stderr) => {
  if (err) throw err;
  console.log(stdout);
  console.error(stderr);
});

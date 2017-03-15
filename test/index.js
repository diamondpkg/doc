'use strict';

const exec = require('child_process').exec;
const path = require('path');

exec(`ddoc -c ${__dirname}${path.sep}diamond.doc.json`, (err, stdout, stderr) => {
  if (err) throw err;
  console.log(stdout);
  console.error(stderr);
});

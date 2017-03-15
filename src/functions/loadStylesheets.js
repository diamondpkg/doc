const glob = require('glob');

module.exports = pattern => new Promise((resolve, reject) => {
  glob(pattern, { nodir: true }, (err, files) => {
    if (err) return reject(err);
    return resolve(files);
  });
});

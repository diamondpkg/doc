const glob = require('glob');

module.exports = pattern => {
    return new Promise((resolve, reject) => {
        glob(pattern, (err, files) => {
            if(err) return reject(err);
            return resolve(files);
        });
    });
};
const fs = require('fs');

module.exports = inputPath => {
  return inputPath ? fs.createReadStream(inputPath) : process.stdin;
};

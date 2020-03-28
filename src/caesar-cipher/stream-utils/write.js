const fs = require('fs');

module.exports = outputPath => {
  return outputPath
    ? fs.createWriteStream(outputPath, { flags: 'a' })
    : process.stdout;
};

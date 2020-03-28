const { program } = require('commander');

module.exports = function commanderSetup() {
  program
    .requiredOption('-a, --action <actionType>', 'enter action')
    .requiredOption('-s, --shift <shiftNumber>', 'enter shift')
    .option('-i, --input [inputPath]', 'enter input file path') // default path
    .option('-o, --output [outputPath]', 'enter output file path'); // default path
  program.parse(process.argv);
  return program;
};

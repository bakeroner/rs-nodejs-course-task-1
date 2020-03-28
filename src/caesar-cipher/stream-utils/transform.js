const { Transform } = require('stream');
const getLetter = require('./../transform-helper/get-letter');

module.exports = (shift, action) => {
  return new Transform({
    transform(chunk, encoding, callback) {
      const stringifyChunk = chunk.toString();
      const updateString = stringifyChunk
        .split('')
        .map(letter => {
          const isUpperCase = letter.toUpperCase() === letter;
          const updatedLetter = getLetter(action, +shift, letter);
          return isUpperCase ? updatedLetter : updatedLetter.toLowerCase();
        })
        .join('');
      this.push(updateString);
    }
  });
};

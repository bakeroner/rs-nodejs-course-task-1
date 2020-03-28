const actionTypes = require('../enums/action-types');

module.exports = (action, shift, letter) => {
  const alphabetArr = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
  ];
  const alphLastIndex = alphabetArr.length;
  const letterIndex = alphabetArr.findIndex(
    elem => elem === letter.toUpperCase()
  );
  if (letterIndex < 0) {
    return letter;
  }
  let cipherIndex =
    action === actionTypes.encode ? letterIndex + shift : letterIndex - shift;
  if (cipherIndex > alphLastIndex) {
    cipherIndex = cipherIndex - alphLastIndex;
  } else if (cipherIndex < 0) {
    cipherIndex = alphLastIndex + cipherIndex;
  }
  return alphabetArr[cipherIndex];
};

const fs = require('fs');
const fsPromises = require('fs').promises;
const readStream = require('./stream-utils/read');
const writeStream = require('./stream-utils/write');
const transformStream = require('./stream-utils/transform');
const { input, output, shift, action } = require('./commander-set')();
const actionTypes = require('./enums/action-types');

process.on('uncaughtException', err => {
  process.stderr.write(`Caught Exception. Err: ${err}`);
  process.exit(1);
});

if (Object.values(actionTypes).findIndex(elem => elem === action) < 0) {
  process.emit('uncaughtException', 'No such action');
}

const rStream = readStream(input);
fsPromises
  .access(output, fs.constants.W_OK)
  .then(() => {
    const wStream = writeStream(output);
    const tStream = transformStream(shift, action);
    rStream.pipe(tStream).pipe(wStream); // tried finish, end, complete to track end not working
  })
  .catch(err => {
    process.emit('uncaughtException', err);
  });

// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// appendFile take in the file path, the data of the file, the callback functions
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // ternary operator err ? / if the condition is truthy then error / if falsy commit logged
  err ? console.error(err) : console.log('Commit logged!')
);

const getFileAsync = require('./index');

const path = process.argv;

console.log(getFileAsync(path[2]));
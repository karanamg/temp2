const path = require('path');

console.log(path.sep)

const absolute = path.resolve(__dirname)
console.log(absolute)

const absoluteFilePath = path.resolve(__filename)

console.log(absoluteFilePath)

const base = path.basename(absoluteFilePath);
console.log(base)
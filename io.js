var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);

var bufString = buf.toString();

console.log(bufString.split('\n').length - 1);

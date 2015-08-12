var fs = require('fs');
var content;

fs.readFile(process.argv[2], 'utf8', function (err, data){
  if (err) {
      throw err;
  }

  content = data.split('\n').length - 1 ;
  console.log(content);
});

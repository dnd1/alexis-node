var fs = require('fs');
var path = require('path');

fs.readdir( process.argv[2], function(err,list){
  if (err) {
    throw err;
  }

  var extFilter = process.argv[3];

  // list.forEach(function(file){
  //   var fileExt = path.extname(file);

  //   if (fileExt === '.' + extFilter) {
  //     console.log(file);
  //   };
  // })

  for (var i = 0; i < list.length; i++) {
    var fileExt = path.extname(list[i]);

    if (fileExt === '.' + extFilter) {
      console.log(list[i]);
    };
  };
});

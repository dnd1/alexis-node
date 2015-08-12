var fs = require('fs');
var path = require('path');

module.exports = printer;

function printer(dirName, extFilter, callback){
  fs.readdir( dirName, function(err,list){
    var filtered = [];
    if (err) {
      return callback(err);
    }

    list.forEach(function(file){
      var fileExt = path.extname(file);

      if (fileExt === '.' + extFilter) {
        filtered.push(file);
      };
    });

    callback(null, filtered);
  });
};

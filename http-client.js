var http = require('http');
var url = process.argv[2];

var data = http.get(url, processResponse);

function processResponse(response){
  response.setEncoding('utf8');

  response.on("error", function(err){
    console.error('There was an error:', err);
  });

  response.on("data", function(data){
    console.log(data);
  });

}

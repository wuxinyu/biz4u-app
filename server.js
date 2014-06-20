var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendfile('dist/index.html');
});

app.listen(3000,function(){
	console.log('Express Server listening on port 3000');
});
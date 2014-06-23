var express = require('express');
var router = express.Router();

var app = express();
app.use('/', express.static(__dirname + '/dist'));


app.get('/', function(req, res){
  res.sendfile('dist/index.html');
});

app.listen(3000,function(){
	console.log('Express Server listening on port 3000');
});app.set('title', 'My Site');
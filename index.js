var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

app.get('/', function(req, res) {
    res.send("Hello World");
});

server.listen(3001, function() {
  console.log('EBS: >> Server listen on port ' + server.address().port);
  console.log('EBS: Start >> EBS 프로젝트에 오신것을 환영합니다.');
});


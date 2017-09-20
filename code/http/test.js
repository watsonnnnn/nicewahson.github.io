 var http = require('http');
 var url = require('url');
 var server = http.createServer();
 server.on("request",function(req,res){
 	console.log(req.url);
 	console.log(url.parse(req.url));
 });
 server.listen(1337,"127.0.0.1");
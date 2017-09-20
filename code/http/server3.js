var http = require('http');
var server = http.createServer(function(req,res){
	console.log('请求 req,url是'+req.url);
	res.writeHead(404,{'Content-Type':'text/html'});
	res.sendDate = false;
	res.write('<html><head><meta charset="utf-8"/></head>');
	res.write('hello');
	res.setTimeout(1000,function(){
		console.log('timeout');
	});
	res.end('</html>');
}).listen(3000,'localhost',function(){
	console.log('server begin listen');
});

var http = require('http');
var url = require('url');
var server = http.createServer(function(sreq,sres){
	var urlparts = url.parse(sreq.url);
	console.log(urlparts);
	var options = {
	hostname:'www.baidu.com',
	port:80,
	path:'/',
	};

	var req = http.get(options,function(res){
	console.log('状态码'+res.statusCode);
	console.log('res headers'+JSON.stringify(res.headers));
	sres.writeHead(res.statusCode,res.headers);
	res.on('data',function(chunk){
		console.log(chunk.toString());
	})
	res.pipe(sres);
	});
});
server.listen(16833,'localhost',function(){
	console.log('已经开始监听了~');
});


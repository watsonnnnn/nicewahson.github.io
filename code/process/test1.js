var http = require('http');

var server = http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     console.log('=======');
     res.end('Hello World');
}).listen(5000, '127.0.0.1');
server.on('listening',function(){
	console.log('-----');
});
function compute() {
	console.log('正在进行复制计算,%d时间',Date.now());
}
process.nextTick(compute);

var http = require('http');
var server = http.createServer(function(req,res){
<<<<<<< HEAD
	console.log('请求是'+req.url);
}).listen(1337,function(){
=======
	console.log('请求 req,url是'+req.url);
}).listen(3000,'localhost',function(){
>>>>>>> 0030824c93878fae6460f8e827875a60f12b4ea8
	console.log('server begin listen');
});
server.on('close',function(){
	console.log('server closed');
});
server.on('connection',function(socket){
<<<<<<< HEAD
	console.log('客户端已连接');
=======
	console.log('address is'+socket.toString());
>>>>>>> 0030824c93878fae6460f8e827875a60f12b4ea8
});
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
			console.log('address in use');
	}
})
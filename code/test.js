var net = require('net');
var file = require('fs').createWriteStream('./2.txt');
var server = net.createServer(function(socket){
	server.getConnections(function(err,count){
		console.log('当前连接数',count)
	});
	file.write(JSON.stringify(socket.address()));
	socket.pipe(file);
	server.close(function(){
		console.log('服务器关闭');
	});
	console.log('建立连接');
	server.maxConnections = 3;
	socket.on('data',function(data){
		console.log(data.toString(),'已读到字节数：',socket.bytesRead);
	});
	socket.on('end',function(){
		console.log('客户端连接被关闭');
	});
	
	console.log('socket address',socket.address());
});
server.listen(8431,'localhost',function(){
	console.log('server address',server.address());
	console.log('开始监听');
});
server.on('error',function(e){
	if(e.code == 'EADDRINUSE'){
		console.log('addr in use');
	}
});
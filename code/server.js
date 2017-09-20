var net = require('net');
var fs = require('fs');
var server = net.createServer(function(socket){
	console.log('连接建立,地址是',socket.address());
	socket.setEncoding('utf8');
	socket.on('data',function(data){
		console.log('已接收数据',data);
		socket.write('确认数据'+data);
	});
	socket.on('error',function(err){
		console.log('发生错误',err.code);
		socket.destroy();
	});
	socket.on('end',function(){
		console.log('客户端连接关闭');
	});
	var readstream = fs.createReadStream('./server.js');
	readstream.on('data',function(data){
		var flag = socket.write(data,'utf8');
		console.log('write方法的返回值是'+flag);
		console.log('缓存队列缓存了'+socket.bufferSize)
	})
	socket.on('close',function(has_error){
		if(has_error){
			console.log('非正常关闭');
			server.unref();
		}else{
			console.log('正常关闭');
		}
	});
	socket.on('drain',function(){
		console.log('缓存区内容已全部发送');
	});
});
server.listen(8431,'localhost',function(){
	console.log('监听开始');
});
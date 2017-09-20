var dgram = require('dgram');
var socket = dgram.createSocket('udp4',function(msg,rinfo){
	console.log('接受客户端数据为%j',msg.toString());
	console.log('客户端信息为%j',rinfo);
	var buf = new Buffer('客户端发送的东西');
	socket.send(buf,0,buf.length,rinfo.port,rinfo.address);
	setTimeout(function(){
		socket.unref();
	},10000);
});
socket.on('listening',function(){
	var address = socket.address();
	console.log('server正在监听地址%j',address);
});
socket.on('close',function(){
	console.log('server closed commonly');
});
socket.bind(41234);
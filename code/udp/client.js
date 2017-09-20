var dgram = require('dgram');
var socket = dgram.createSocket('udp4',function(msg,rinfo){
	console.log('接受服务器数据为%j',msg.toString());
	console.log('服务端信息为%j',rinfo);
});
var buf = new Buffer('你好服务器');
socket.send(buf,0,buf.length,'41234','localhost',function(){
	console.log('send over');
});

var net = require('net');
var client = new net.Socket();
client.setEncoding('utf8');
client.connect(8431,'localhost',function(){
	console.log('已连接');
	client.write('你好~');
});
client.on('error',function(err){
		console.log('发生错误',err.code);
		client.destroy();
	});
client.on('data',function(data){
	console.log('已发送的数据',data);
});
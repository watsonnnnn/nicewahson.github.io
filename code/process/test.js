process.on('message',function(m){
	console.log('子进程收到消息:'+m);
	process.send(m);
});
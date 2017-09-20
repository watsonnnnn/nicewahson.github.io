var cp = require('child_process');
var n = cp.fork('./test.js');
n.on('message',function(m){
	console.log('父进程收到消息：'+m);
	process.exit();
});
n.send('{user:"hahahah"}');

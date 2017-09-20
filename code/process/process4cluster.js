var cluster = require('cluster');
var http = require('http');
if(cluster.isMaster){
	cluster.fork();
	console.log('父进程中处理');
}else{
	http.createServer(function(req,res){
		if(req.url != '/favicon.ico' ){
			res.writeHead(200,{'Content-Type':'text/html'});
			res.write('<head><meta charset="utf-8"/></head>');
			res.write('子进程中处理');
			res.end('hello\n');
			console.log('子进程中处理了');
		}
	}).listen(1337,function(){
		console.log('监听开始');
	});
}
cluster.on('fork',function(worker){
	console.log('子进程'+worker.id+'开启了');
});

var spawn = require('child_process').spawn;
var sp1 = spawn('node',['child1.js','one','two','three','four'],{cwd:'./test'});
var sp2 = spawn('node',['child2.js'],{stdio:'pipe'});
console.log('类型为:'+typeof (sp1));
sp1.stdout.on('data',function(data){
	console.log('子进程1的输出是:'+data);
	sp2.stdin.write(data);
});
sp2.stdout.on('data',function(data){
	console.log('子进程2的输出是:'+data);
});
sp1.on('exit',function(code,signal){
	process.stdout.write('子进程1退出,退出代码是'+code);
});
sp1.on('error',function(err){
	console.log('子进程1出错'+err);
});
sp2.on('error',function(err){
	console.log('子进程2出错'+err);
});
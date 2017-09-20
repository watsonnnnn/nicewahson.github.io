var fs = require('fs');
var out = fs.createWriteStream('./1.txt');
process.stdout.write('子进程2进入');
process.stdin.on('data',function(data){
	process.stdout.write('子进程2收到的数据:'+data);
	out.write(data);
});
process.stdin.on('end',function(){
	out.end();
	process.exit();	
});
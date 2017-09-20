var http = require('http');
var options = {
	hostname:'www.baidu.com',
	port:80,
	path:'/',
	method:'GET',
	
};
var req = http.request(options,function(res){
	console.log('状态码'+res.statusCode);
	console.log('res headers'+JSON.stringify(res.headers));
	res.on('data',function(data){
		console.log('响应内容'+data);
	})
});
req.setTimeout(1000,function(){
	console.log('请求超时，即将终止');
	req.abort();
})
req.on('error',function(err){
	console.log('err'+err.code);
});
req.end();
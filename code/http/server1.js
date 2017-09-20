var http = require('http'),
	querystring = require('querystring');

var options = {
	host:"www.baidu.com",
	port:80,
	path:'/',
	method:'POST'
};

var req = http.request(options,function(res){
	console.log('Status : '+res.statusCode);
	console.log('',querystring.parse('http://www.baidu.com?a=1&b=2'));
	console.log('Headers: '+JSON.stringify(res.headers));
	res.setEncoding('utf8');
	res.on('data',function(chunk){
		console.log('Body: '+chunk);
	});
});

req.write('data\n');
req.write('data\n');
req.end();
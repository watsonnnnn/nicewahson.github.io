var express = require('express');
var app = new express();
app.use(express.basicAuth('test1','test'));
app.get('/',function(req,res){
	res.send('hello');
});
app.listen(1377,'localhost');
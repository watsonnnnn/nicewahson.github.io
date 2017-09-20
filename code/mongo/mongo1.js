var mongo = require('mongodb');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true});
var db = new mongo.Db('test',server,{safe:true});
db.open(function(err,db){
	if(err)
		throw err;
	else{
		console.log('连接数据库'+require('util').inspect(db.databaseName));
		db.collection('test',function(err,collection){
		collection.find({haha:'hehe'}).toArray(function(err,docs){
			console.log('文档是'+JSON.stringify(docs));
			})
		});
		db.close();
	}
});
db.on('close',function(err,db){
	console.log('关闭数据库'+db);
});

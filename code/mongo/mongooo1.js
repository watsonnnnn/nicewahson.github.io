var mongo = require('mongodb');
var server = new mongo.Server('localhost',27017,{auto_reconnect:true})
var db = new mongo.Db('test',server,{safe:true});
db.open(function(err,db){
	console.log('打开库'+db.databaseName);
	db.collection('test',function(err,collection){
		collection.insert({'name':'zqz'},{safe:true},function(err,docs){
			console.log('文档是'+JSON.stringify(docs));
			db.close();
		});
	})
})
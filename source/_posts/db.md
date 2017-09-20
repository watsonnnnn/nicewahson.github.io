---
title: db
date: 2017-01-06 17:12:27
tags: mongo
categories: mongo
---
首先引入mongodb，再创建一个代表mongodb数据库所在服务器的server对象 用于指定mongo数据库所在的服务器
var server = new mongo.Server(host,port,[options]);
server创建成功后要创建一个代表mongo数据库的db对象
var db = new mongo.Db(databaseName,server,[options]);
db创建成功后，使用open方法进行数据库连接;
db.open(callback),function(err,db){},连接操作的回调,db表示连接成功的数据库，失败时为null
当数据库不需要使用时，db.close([forceClose],[callback]),forceClose是布尔值，为true时强制关闭该数据库，数据库关闭后不可再用open打开，而false时的关闭后可以继续打开,function(err){},关闭时触发close事件。
---
title: tcp和udp通信
date: 2016-12-10 15:14:52
tags: tcp和udp通信
categories: 网络通信
---
net模块创建tcp服务器
var net=require('net'),var server=net.createServer([options],[connectionListener]),connectionListener为function(socket){}是建立连接时的回调函数,socket是tcp服务器监听的socket端口对象
server.listen(port,[host],[backlog],[callback]),port是端口号，为0时分配随机端口，tcp服务器会监听来自这个端口的连接，host是主机，忽略的话则监听任意ipv4的客户端连接，backlog指定位于
等待队列中的客户端连接的最大数量，超过后tcp服务器将拒绝来自新的客户端请求，默认为511，服务器开始监听时触发listening事件，触发callback方法。
server.address()查看服务器所监听的地址信息.
server.getConnections(function(err,count){});方法获取当前连接数，可以设置服务器的最大连接数server.maxConnections
server.close([callback]),指定服务器拒绝所有新的客户端连接,当现有连接全部关闭时触发close事件，调用close方法
server.on('close',function(){...});
socket.on('data',function(data){...}),socket对象可以被用来读取客户端发送的流数据，每次接收到客户端发送的流数据时触发data事件，当收到另一侧传来的数据时触发
socket.pipe(destination,[options]),destination为一个可用于写入流数据的对象,options是一个对象，可以在对象中使用一个布尔类型的end属性，如果属性为true，当数据读完时立即结束写操作，为false
时不结束，可以被继续写入新数据，默认为true
socket.setEncoding('utf8'),设置读取到的数据的编码格式
socket.on('error',function(err){err.code...}),发生错误时触发此函数,同时,错误时应该调用socket.destroy()方法销毁该socket端口对象
socket.end([data],[encoding]),服务端使用end关闭该客户端连接，客户端使用end关闭该服务端连接,data表示在关闭前向另一端追加发送的数据,可以是buffer，也可以是字符串
创建tcp客户端
var client = new net.Socket([options]),
client.setEncoding('utf8'),client是一个socket对象,在需要往客户端或服务器传数据时，可以使用socket.write(data,[encoding],[callback]),callback是数据写入完毕时的回调，没有参数。
client.end('end'),表示关闭连接时追加数据。
socket.on('end',function(){
	server.unref('客户端连接关闭时关闭服务器');
})
socket.on('close',function(has_error){
	if(has_error)
		server.unref('客户端连接关闭时关闭服务器');
});监听close事件，与server.close()方法不同。
socket.setKeepAlive([enable],[initialDelay]),第一个参数表示是否启用探测机制，默认为false，第二个参数是探测间隔时间，隔多久探测一次对方机器，默认为0
net.isIP(input),用于判断一个字符串是否是一个ip地址，不是ip的话返回0，是ipv4的话返回4，ipv6的话返回6
net.isIPv4(input),判断字符串是否是一个ipv4地址
net.isIPv6(input),判断是否是ipv6地址
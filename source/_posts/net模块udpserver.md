---
title: net模块udpserver
date: 2016-12-21 18:00:23
tags: tcp和udp通信
categories: 网络通信
---
net模块创建udp服务器
udp协议是面向非连接的协议，不要求先建立连接，不安全但是速度快，更实时
var dgram = require('dgram');
var net = dgram.createSocket(type,[callback]),type指定进行udp通信的协议类型，可为'udp4'或'udp6',callback用于指定当从该端口接收到数据时调用的回调，
function(msg,rinfo){...},msg是一个buffer对象，其中存放接收到的数据，rinfo参数是一个对象，所具有的属性 address:发送者的ip，family:标识发送者的ip
是ipv4还是ipv6，port为发送者的socket端口号，size为发送者所发送的数据字节数，在从该socket端口中接收到数据时，触发message事件,所以也可以使用
socket.on('message',function(msg,ringo){})
创建socket对象后，必须使用socket.bind(prot,[address],[callback],这样udp客户端才知道往哪个地址发数据，也可以不使用bind方法中的callback方法，
绑定完后开始监听时触发socket.on('listening',callback),指定当socket端口对象开始监听来自于指定地址和端口号的数据时所要执行的处理
socket.send(buf,offset.length,port,address,[callback]),缓冲区，开始时的位置，发送的字节数，接受数据的socket端口对象所使用的端口号，地址，发送完毕的回调，
function(err,bytes){...}
socket.close()方法关闭该socket端口对象，停止从该端口上监听数据，如果此时应用程序不再执行其他代码，整个应用会正常关闭。当关闭时触发close事件.
socket.setTTL(input),input为0-255的数字，设置数据包的生存时间。
socket.setBroadcast(flag),布尔类型参数，为true时表示服务器或客户端可以利用socket对象的send方法进行广播
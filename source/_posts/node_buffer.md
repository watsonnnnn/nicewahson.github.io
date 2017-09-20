---
title: nodejs_buff
date: 2016-11-21 17:46:22
tags: nodejs buffer
categories: node笔记
---
构造buffer
new Buffer(size),size为缓存区大小
buf.fill(value,[offset],[end]),此方法对buffer进行初始化,value必填，表示需要被写入的数值，第二个参数表示从第几个参数写入，
默认为0，第三个参数表示写入到第几个字节处，默认为buffer对象大小，即书写到缓存区底部
new Buffer(array),array是指定数值数组 eg: newBuff([1,2,3])//(Buffer 00 01 02)
new Buffer(str,[encoding]),缓冲区中存放的是原字符串的十六进制表现形式，使用字符串初始化缓冲区，第二个参数为指定文字进行编码，不同编码字符串生成缓冲区对象，
ascii编码和u8编码生成的是相同的，其他的是不同的，也就会把不同的数据放在缓冲区。
缓冲区对象存在length属性，可以获取长度，也可以使用下标形式获取制定位置的值。

Buffer对象与字符串对象相互转换
toString方法，buf.toString([encoding],[start],[end]),第一个参数默认u8，二三表示转换的起始终止位置
write方法向已创建buffer对象写入字符串，buf.write(string,[offset],[length],[encoding]),第一个参数指定写入内容，offset和length参数指定字符串转为字节数据后的
写入位置，offset是下标。书写位置从第1+offset个字节开始到offset+length个字节为止。第四个参数编码默认u8。
StringDecoder对象
var StringDecoder=require('string_decoder').StringDecoder;
decoder=new StringDecoder([encoding]);encoding默认u8
decoder.write(buffer);将buffer对象中的数据转为字符串

Buffer对象和JSON对象转换
JSON.stringify方法将buffer对象中保存的数据转换为一个字符串，再用JSON.parse方法将转换后的字符串还原为一个数组，这个数组可以用来构造Buffer对象

复制缓存数据，将一个buffer对象中以保存的二进制数据复制到另一个buffer对象中。
buf.copy(targetBuffer,[targetStart],[sourceStart],[sourceEnd]),a.copy(b,10),一直复制到b的末尾，不会再继续复制。

Buffer的类方法
isBuffer方法判断一个对象是否是一个Buffer对象，Buffer.isBuffer(obj)
byteLength用于计算指定字符串的字节数，Buffer.byteLength(string,[encoding])
concat方法将多个buffer对象连接起来，Buffer.concat(list,[totalLength]),list代表多个buffer对象形成的数组，第二个参数用于指定拼接后生成的buffer对象的长度
isEncoding方法用于检测一个字符串是否是一个有效的编码格式字符串，Buffer.isEncoding(encoding);
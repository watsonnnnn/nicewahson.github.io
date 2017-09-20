---
title: crypto
date: 2017-01-06 15:59:36
tags: crypto
categories: 加密解密和其他
---
crypto.getCiphers(),查看nodejs中能用的所有加密算法
crypto.getHashes(),查看nodejs中能用的所有散列算法

#### dns模块
dns.resolve(domain,[rrtype],callback),用于将一个域名解析为一组dns记录,callback为域名解析操作完成时调用的回调函数,function(err,addresses){}
dns.lookup(domain,[family],callback),function(err,address,family){},family参数为4或6,表示获取到的ip地址类型为ip4或ip6
dns.reverse(ip,callback),function(err,domains){},将ip反向解析为与该ip绑定的域名
readline模块逐行读取流数据
readline.createInterface(options),options对象中可以使用的{input:...,output:...,completer:function,terminal:boolean},completer用于指定tab补全处理

#### util模块
format方法格式化
debug(),error(),puts(),print(),log(string),log方法用于将一个字符串作为标准输出流进行输出,会在string之前加上当前时间输出
util.inspect(object,[options]),返回一个字符串，串中包含了一个对象的信息
util.isArray(object);
util.isRegExp(object)
util.isDate(object)判断是否为日期类型
util.isError(object)判断是否为错误对象
util.inherits(constructor,superConstructor)用于将一个父类的方法继承给该父类的子类

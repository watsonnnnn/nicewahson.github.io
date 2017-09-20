---
title: httpserver
date: 2016-12-24 10:59:16
tags: http server
categories: http
---
querystring.parse(str,[sep],[eq],[options]),str为转换的查询字符串,sep参数是该字符串中的分隔字符,默认为'&',eq是分配字符,默认为'=',options是
一个对象,可以在该对象中用一个整数类型的maxKeys属性指定转换后的属性个数,设置为0时等同于不使用maxKeys
querystring.stringify(obj,[sep],[eq]),作用和parse相反
url.parse(urlStr,[parseQueryString]),将url字符串转换为一个对象,对象中有很多属性,比如query,为查询字符串,parseQueryString为布尔值,默认为false,
为true时表示转换后的对象中的query字符串同时转换为对象
url.format(urlobj),将url转换后的对象还原成字符串
url.resolve(from,to),与path.resolve()方法类似
response.writeHead(statusCode,[reasonPhrase],[headers]),第二个是状态码的描述信息,第三个是响应头
response.write(chunk,[encoding]),encoding默认为utf8
发送响应数据时，如果数据量过大或网络较慢，server会将数据缓存到内存中，然后在可以接收数据的时候将内存中的数据通过操作系统内核缓存区发送给对方
write方法返回布尔值，为true时表示数据是直接发送到内核缓存区，为false表示先存到内存中。
response.setTimeout(msecs,[callback]),设置响应超时时间，msecs是时间，callback是超时后的回调，如果不设置这个，或者不在timeout
事件指定回调函数，那么当响应超时时会自动关闭与客户端连接的端口。
var request = http.request(options,callback),options可以是字符串,如果是字符串,将自动使用url模块中的parse方法转换为一个对象。callback为
function(response){}，表示获取到返回的响应流时调用的回调函数。
每次调用request方法后，必须要加一个req.end()方法来结束本次请求。
也可以直接使用http.get(options,callback),仅限于get方法，而且在结束请求时不需要手动调用end()

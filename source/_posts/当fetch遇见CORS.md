---
title: 当fetch遇见CORS
date: 2018-02-23 10:40:07
tags: fetch,cors
categories: 学习
---

最近做了一个无头浏览器phantomjs截微信文章的功能，最后拆出了三个功能，一个是把整篇文章下载成一张长图，一个是把长图切成小图然后全部上传到后台再返回全部的图片地址，再一个就是看不见的直接把这些图片链接全部上传到已有的接口。下载图片无非就是把phantomjs截下来的图保存到本地，然后再用nodejs去读图下载图，关键代码就这点
<pre>
var stm = fs.createReadStream('./page/' + outfiles[0]).pipe(resp);
stm.on('finish', function () { //在pipe结束后再删除，否则pipe出来的会缺失
    console.log('finish success')
    fs.unlinkSync('./page/' + outfiles[0])
})
</pre>
然后是切图上传小图。这步结束后，上传所有图片链接时就出了点问题。

<!--more-->

先说一下，node中间层和前台是不同域的，所以先要上CORS配置
<pre>
res.setHeader("Access-Control-Allow-Origin", "*");
//res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
//res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,token, tookie");
res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
res.setHeader("X-Powered-By", ' 3.2.1');
</pre>
允许所有请求来源和请求方式。上面有一个OPTIONS请求，这个是prelight，也就是预检请求。这里要再记一下简单请求和非简单请求，因为浏览器再发起非简单请求时，会先发一个预检请求，也就是OPTIONS请求方式的

请求方法是以下三种方法之一：
* HEAD
* GET
* POST

HTTP的头信息不超出以下几种字段：
* Accept
* Accept-Language
* Content-Language
* Last-Event-ID
* Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain

上面这些条件，只要有一个不满足，那就是非简单请求，就会发OPTIONS，[点这里](http://www.ruanyifeng.com/blog/2016/04/cors.html)了解更多。

前台使用的是fetch进行请求处理，因为后台处理图片链接的接口是需要cookie的，由于cookie是在后台服务器生成的，而且node起的服务是单独部署的，所以作为中间层的node是无法直接获取到cookie的(不是同一个域)，也就是说，即使是fetch里面添加了
<pre>
    credentials: 'include'
</pre>
也是没用的。

再一个，当fetch时添加了credentials的话，就会出现遇见请求失败，origin设置为*不允许，原因[在这里](https://stackoverflow.com/questions/42803394/cors-credentials-mode-is-include)，所以就有了第二种的req.headers.origin。
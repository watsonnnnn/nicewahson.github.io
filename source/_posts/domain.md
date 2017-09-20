---
title: domain
date: 2017-01-04 18:15:59
tags: domain
categories: 错误处理
---
domain模块进行错误处理
可以使用process.on('uncaughtException',function(err){...})来捕获异常,单粗鲁，可能会资源泄漏，内存泄漏
var domain = domain.create();
返回一个domain对象，可以通过监听该对象的error事件并指定回调来实现当捕获到错误时的处理
domain.on('error',function(err){...}),使用domain的run方法指定domain对象监听的代码，这些代码要写在函数中，domain.run(fn)
domain.add(emitter),可以对domain对象进行显示绑定
domain.bind(callback),将一个回调函数与domain对象绑定，如果函数发生错误，交由domain对象
domain.intercept(callback),和bind类似，区别是在bind的callback中要显示的throw error，而intercept不需要
domain._stack查看domain堆栈中的内容
domain.dispose(),销毁domain对象

assert
assert.equal(actual,expected,[message]),参数：实际值，期望值，自定义异常信息,不相等会抛出assertionError
assert.notEqual(...)...相等时会抛错
assert.strictEqual(...)...,判断时连同类型一起判断,相当于===
assert.ok(value,[message]),判断某个值是否为真
assert.deepEqual(...)
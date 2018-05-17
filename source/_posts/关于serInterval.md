---
title: 关于serInterval
date: 2018-05-16 16:59:55
tags: js
---

serInterval()表示以一定时间间隔去循环回调，指定的是'开始执行'之间的时间间隔，不考虑每次循环本身的时间。setInterval和serTimeout都表示的异步macroTask，也就是说在主线程空闲时候，如果时间到的话就去开始执行回调。对于serInterval，设定时间大于每次循环的时间，不会有问题；如果每次task的时间超出了指定时间间隔的话，就会有问题

对于浏览器来说，浏览器会在时间间隔后持续向eventloop中加入task，就是说不管当次执行要多久，如果间隔100ms，当次循环需要200ms的话，那么队列里就存在有两个连续执行的任务,会进行累积。比如说设置100ms，第一次循环要5ms，那么再过95ms就会开始执行下一次；而如果第一次循环要105ms，下一次循环就会立即开始。
<pre>
setInterval(function(){
  console.log(2);
},1000);

(function (){
  sleeping(3000);
})()

等到第二行语句运行完成以后，立刻连续输出三个2，然后开始每隔1000毫秒，输出一个2。也就是说，setIntervel具有累积效应，如果某个操作特别耗时，超过了setInterval的时间间隔，排在后面的操作会被累积起来，然后在很短的时间内连续触发，这可能或造成性能问题（比如集中发出Ajax请求）
</pre>

但是对于nodejs来说，就不会发生累积。setInterval 在准备把回调函数加入到事件队列的时候，会判断队列中是否还有未执行的回调，如果有的话，它就不会再往队列中添加回调函数

<pre>
var count = 0;
var countId = setInterval(function() {
  if(count >= 5){
    clearInterval(countId)
  }
  count++;
  console.log(2+ " time: " +Date.now());
}, 1000);

(function() {
  var start = Date.now();
  for(var i=1; i&lt;=200000000;i++){
    if(i===200000000){
      console.log(i);
    }
  };
  console.log(Date.now() - start);
})();

200000000
1771
2 time: 1457495719375
2 time: 1457495720378
2 time: 1457495721380
2 time: 1457495722383
2 time: 1457495723395
2 time: 1457495724397
[Finished in 8.5s]

可以看到，主线程占用时间长的话，后续的任务会被延迟执行。
</pre>

<pre>

var count = 0;
var countId = setInterval(function() {
if(count == 0){
(function() {
  var start = Date.now();
  for(i=1; i&lt;=200000000;i++){ // (md里面 小于号 & lt; 大于号 & gt;)
    if(i==200000000){
    console.log(i);
  }
}
console.log(Date.now() - start);
})();
}
  if(count >= 5){
    clearInterval(countId)
  }
  count++;
  console.log(2+ " time: " +Date.now());
}, 200);

浏览器下:
200000000
VM1649:12 466
VM1649:19 2 time: 1526464501571
VM1649:19 2 time: 1526464501572
VM1649:19 2 time: 1526464501705
VM1649:19 2 time: 1526464501905
VM1649:19 2 time: 1526464502105
VM1649:19 2 time: 1526464502305

nodejs下：
200000000
447
2 time: 1526464483584
2 time: 1526464483784
2 time: 1526464483985
2 time: 1526464484186
2 time: 1526464484387
2 time: 1526464484588

可以看到，当第一次循环所需时间比间隔时间长的话，浏览器环境下会持续不断按实际间隔加回调，同时第一次的执行时间直接导致后面的执行时间往后推，第一次的时间=第二次时间，第二次时间+133=第三次时间，466-400=66，加上133正好是200。就是说浏览器下所有的回调首先按固定时间间隔排好，如果某次回调执行时间长于间隔时间的话，就会把导致下次乃至更下次的回调执行时间往后推迟。这样就可能导致两次回调不存在时间间隔的情况。
而nodejs下则不会这样。

</pre>
对于上面这种不存在时间间隔的情况，可以改用setTimeout来解决，即在上面回调结束后指定时间继续下次的回调。
<pre>
setTimeout(function f() {
  //处理中 ...
  setTimeout(f, interval);
}, interval);
</pre>


https://jeffjade.com/2016/01/10/2016-01-10-javaScript-setInterval/

http://www.laruence.com/2009/09/23/1089.html

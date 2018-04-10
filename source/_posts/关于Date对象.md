---
title: 关于Date对象
date: 2018-04-09 13:54:09
tags: api Date
---
1.构造函数直接调用无效，即使传参。

2.new进行构造时
<pre>
new Date();
new Date(value);
new Date(dateString);
new Date(year, month[, day[, hour[, minutes[, seconds[, milliseconds]]]]]);
年：使用四位数年份，比如2000。如果写成两位数或个位数，则加上1900，即10代表1910年。如果是负数，表示公元前。
月：0表示一月，依次类推，11表示12月。
日：1到31。
小时：0到23。
分钟：0到59。
秒：0到59
毫秒：0到999。
</pre>
<pre>
// 参数为时间零点开始计算的毫秒数
new Date(1378218728000)
// Tue Sep 03 2013 22:32:08 GMT+0800 (CST)

// 参数为日期字符串
new Date('January 6, 2013');
// Sun Jan 06 2013 00:00:00 GMT+0800 (CST)

// 参数为多个整数，
// 代表年、月、日、小时、分钟、秒、毫秒
new Date(2013, 0, 1, 0, 0, 0, 0)
// Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
</pre>
* 参数可以是负数，代表1970年元旦之前的时间<pre>
new Date(-1378218728000)
// Fri Apr 30 1926 17:27:52 GMT+0800 (CST)
</pre>
* 只要是能被Date.parse()方法解析的字符串，都可以当作参数<pre>
new Date('2013-2-15')
new Date('2013/2/15')
new Date('02/15/2013')
new Date('2013-FEB-15')
new Date('FEB, 15, 2013')
new Date('FEB 15, 2013')
new Date('Feberuary, 15, 2013')
new Date('Feberuary 15, 2013')
new Date('15 Feb 2013')
new Date('15, Feberuary, 2013')
// Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
</pre>

日期类型相加时返回两个字符串连接后的新字符串，相减时返回间隔毫秒数。

Date.now()

Date.now方法返回当前时间距离时间零点（1970年1月1日 00:00:00 UTC）的毫秒数，相当于 Unix 时间戳乘以1000

Date.parse()


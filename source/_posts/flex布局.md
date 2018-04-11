---
title: flex布局
date: 2018-04-11 10:52:52
tags: css flex
---
### flex

## 容器属性

flex-direction: row | row-reverse | column | column-reverse

![flex-direction](direction.jpg)

flex-wrap: nowrap | wrap | wrap-reverse

![flex-direction](wrap.png)

<!-- more -->

flex-flow: 上两个属性简写 flex-direction flex-wrap

justify-content: 主轴对齐方式 flex-start | flex-end | center | space-between | space-around

![justify-content](justifycontent.png)

align-items: 交叉轴对齐方式 flex-start | flex-end | center | baseline(第一行文字基线对齐) | stretch(如果项目未设置高度或设为auto，将占满整个容器的高度)

![align-items](alignitems.png)

align-content: 多行元素对齐方式 flex-start | flex-end | center | space-around | space-between | stretch 

和上一个属性区别就是这个是处理<strong>多行</strong>的，所以对于单行这个属性无效。
![align-content](aligncontent.png)

## 项目属性

order: integer 排序 默认为0 越小越靠前排列
***
flex-grow: integer 放大比例 默认为0；如果剩余空间为 x，三个元素的 flex-grow 分别为 a，b，c。设 sum 为 a + b + c。那么三个元素将得到剩余空间分别是 x * a / sum, x * b / sum, x * c / sum。

父元素宽度 500px，三个子元素的 width 分别为 100px，150px，100px。

于是剩余空间为 150px

三个元素的 flex-grow 分别是 1，2，3，于是 sum 为 6

则三个元素所得到的多余空间分别是：

150 * 1 / 6 = 25px

150 * 2 / 6 = 50px

150 * 3 / 6 = 75px

三个元素最终的宽度分别为 125px，200px，175px。

100px + 25px = 125px

150px + 50px = 200px

100px + 75px = 175px

如果所有项目都为1，那么这些项目将平分容器宽度。其中一个为2，其他为1的话，为2的占据的剩余空间宽度将是其它的2倍。注意，这里说的是剩余空间，也就是项目排完后多出来的空间。如果所有项目都是0-1，全部之和加起来小于1的话，还有剩余的不再分配。
***
flex-shrink: 项目缩小比例 默认为1，如果空间不足(所有项目宽度之和大于容器宽度)，项目将缩小；如果其中一个为0，其它为1，那为0的将不缩小。

超过宽度为x，三个flex-shrink为a,b,c，宽度为wa,wb,wc，那么最终的缩小尺寸为
<pre>
a b c和大于1：
x*wa*a/(wa*a+wb*b+wc*c)
x*wa*a/(wa*a+wb*b+wc*c)
x*wa*a/(wa*a+wb*b+wc*c)

当a b c和小于1，x=x*(a+b+c),然后和上面一样

</pre>

假设父元素 500px。三个子元素分别设置为 150px，200px，300px。

比如说三个子元素的 flex-shrink 的值分别为 1，2，3。

首先，计算子元素溢出多少：150 + 200 + 300 - 500 = -150px。

那这 -150px 将由三个元素的分别收缩一定的量来弥补。

具体的计算方式为：每个元素收缩的权重为其 flex-shrink 乘以其宽度。

所以总权重为 1 * 150 + 2 * 200 + 3 * 300 = 1450

三个元素分别收缩：

150 * 1(flex-shrink的值) * 150(width) / 1450 = -15.5

150 * 2(flex-shrink的值) * 200(width) / 1450 = -41.4

150 * 3(flex-shrink的值) * 300(width) / 1450 = -93.1

三个元素的最终宽度分别为：

150 - 15.5 = 134.5

200 - 41.4 = 158.6

300 - 93.1 = 206.9

同样，当所有元素的 flex-shrink 之和小于 1 时，计算方式也会有所不同：

此时，并不会收缩所有的空间，而只会收缩 flex-shrink 之和相对于 1 的比例的空间。

上面的例子，但是 flex-shrink 分别改为 0.1，0.2，0.3。于是总权重为 145。

三个元素收缩总和并不是 150px，而是只会收缩 150px 的 (0.1 + 0.2 + 0.3) / 1 即 60% 的空间：90px。

每个元素收缩的空间为：

90 * 0.1(flex-shrink) * 150(width) / 145 = 9.31

90 * 0.2(flex-shrink) * 200(width) / 145 = 24.83

90 * 0.3(flex-shrink) * 300(width) / 145 = 55.86

三个元素的最终宽度分别为：

150 - 9.31 = 140.69

200 - 24.83 = 175.17

300 - 55.86 = 244.14

[这里是原文](https://zhuanlan.zhihu.com/p/24372279)

***

flex-basis: 项目伸缩基准值。默认为auto。 number|auto|initial|inherit

未指定时，值为width；width没指定时，值为content宽。受项目maxwidth和minwidth影响。同时当空间不足时或有剩余，就会按照flex-grow和flex-shrink。
***
flex: flex-grow flex-shrink flex-basis;三个值缩写 默认为0 1 auto;后两个属性可选。所以直接写flex:1和flex-grow:1是一样的。

flex: auto == flex:1 1 auto

flex: none == flex:0 0 auto

***
align-self: auto | flex-start | flex-end | baseline | center | stretch

项目单独的交叉轴对齐方式，可覆盖align-items属性。默认为auto，表示继承align-items值。


https://zhuanlan.zhihu.com/p/24372279
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html
https://blog.csdn.net/sinat_27088253/article/details/51532992
https://zhuanlan.zhihu.com/p/21834559
---
title: string的api
date: 2018-04-13 09:55:04
tags: javascript api
---

### replace
string.replace: function(regexp, replacement)

regexp可以使用/g修饰符。

replacement可以是字符串，也可以是$符号用来指代替换内容。
<pre>
$&:代指匹配到的内容本身
$`:代指匹配到的结果前面的文本(前面所有)
$':代指匹配到的结果后面的文本
$n:代指匹配到的第n组内容
$$:指美元符号

'msaTom'.replace(/[A-Z]|^ms/g,'-$&')
// "-msa-Tom"

'qwersaTom'.replace(/[A-Z]|^ms/g,'-$`')
// "qwersa-qwersaom"

</pre>
replacement也可以是函数，function(match, $1, $2,..., index, string){}
match是匹配到的内容，$n指分组，有多少分组就有多少$，最后的index指内容的起始下标，string指原字符串。
<pre>
'qqqaaa'.replace(/(q)(a)/g,function(m,s1,s2,index,str){
    console.log(m,s1,s2,index, str)
    return 'w';
})

// qa q a 2 qqqaaa
</pre>
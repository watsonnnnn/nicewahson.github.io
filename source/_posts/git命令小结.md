---
title: git命令小结
date: 2018-04-09 01:17:44
tags: git 版本
---
添加子公共项目：
<pre>
git remote add childUpstream https://xxxx
git subtree --prefix -S=放子git工程的文件夹 childUpstream 分支
</pre>
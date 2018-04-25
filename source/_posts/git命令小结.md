---
title: git命令小结
date: 2018-04-09 01:17:44
tags: git 版本
---
### 添加子公共项目：
<pre>
git remote add childUpstream https://xxxx
git subtree --prefix -S=放子git工程的文件夹 childUpstream 分支
</pre>

### git rebase, git merge
merge之前
![merge前](beforemerge.jpg)
在master上merge，根据696和8ab和两个分支的共同祖先e38进行三方合并，最后生成新commit
![merge后](aftermerge.jpg)

rebase之前
![rebase之前](beforerebase.jpg)
在master上git rebase dev，会把rebase的分支上内容拉下来，再把本次master上特有的全部commit都提取出来顶到最上面，生成新的commit，每个commit有一个冲突，也就可能多次冲突。相当于把master上的commit复制一遍到了dev上，但是还是处在master分支。
![rebase之后](afterrebase.jpg)

---
title: process
date: 2017-01-04 16:16:27
tags: process
categories: process
---
process.memoryUsage(),获取运行nodejs程序的进程的内存使用量。
nextTick方法，用于将一个函数推迟到代码中所书写的下一个同步方法执行完毕时或异步方法的事件回调函数开始执行时调用,process.nextTick(callback)
abort方法用于发出SIGABRT信号，使进程异常终止，同时产生一个核心文件
chdir方法用于修改应用程序中使用的当前工作目录,process.chdir(directory),参数是一个字符串，相对或绝对路径
cwd方法，返回当前目录
exit方法用于退出nodejs应用程序进程,process,exit([code]),code指定为操作系统提供退出代码，为0时表示正常退出，默认为0
getgid方法返回运行nodejs应用程序的进程组id，只在非windows系统有效
setgid方法设置程序进程组id，只在非windows系统有效，process.setgid(id)
getuid方法返回运行nodejs应用程序的进程的用户id
setuid。。。
kill方法，向一个进程发送信号，process.kill(pid,[signal]),pid是进程号，signal可选，如SIGINT,SIGUSR1,默认为SIGTERM（表示中止该进程）
uptime方法返回nodejs程序的当前运行时间，单位是秒。
hrtime测试代码段的运行时间，返回一个数组，第一个参数是秒，第二个是毫秒
child_process模块开启子进程
child_process.spawn(command,[argv],[options])
process.stdin.on('data',function(data){}),process.stdout.write(data)
开启子进程child_process.fork(modulePath,[args],[options])，使用此方法要显示关闭进程，process.exit(),发送消息可以使用process.send(m,[setHandle])
当子进程收到消息时触发message事件，process.on('message',function(m,[setHandle]){}),当发送时的setHandle为server或socket对象，那么收到时的也是。
cluster.fork([env]),返回一个隐式创建的worker对象，表示使用fork方法开启的子进程中运行的nodejs应用程序实例对象，并且在该应用程序中运行一个模块文件，(默认是当前应用程序中使用的主模块文件)；
cluster.on('fork',function(worker){...});
cluster.setupMaster([settings])修改子进程中运行的模块文件或修改子进程中运行的nodejs程序的其他默认行为
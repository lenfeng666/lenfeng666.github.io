---
title: 安卓手机免root家庭nas
published: 2024-08-02 23:02:26
cover: https://alist.nn.ci/logo.svg
category: 安卓改造计划
tags:
  - 安卓
  - nas
---
### 欢迎来到本期安卓改造计划本期带来家用nas无需复杂配置即可搭建家庭nas让内网设备文件可以实现高效传输
### 前言
1. 家用nas可谓是非常的方便在各个设备上面传输不同的文件
2. 可以搭建家用影视库实现免费看视频番剧
3. 自动化下载视频
### 准备工作
1. 准备一台安卓手机
2. 准备一台电脑
3. 准备软件termux
### 教程
### 安装alist
启动termux使用命令我们首先安装alist
```bash
pkg install alist
```
安装完成后我们使用命令启动alist
```bash
alist serve
```
启动完成后我们使用浏览器访问 http://127.0.0.1:5244/ 用户名默认为admin

我们输入
```bash
alist admin
```
即可查看当前管理员密码管理密码在第一次启动时会加密所以我们还是直接修改密码为自己的方便一点
```bash
alist admin set 你自己的密码
```
配置完成后我们使用浏览器访问 http://127.0.0.1:5244/ 即可进行登录操作登录成功后我们即可进行配置操作
### 配置Aria2下载器
这边我们需要使用RimuruW大佬的一键安装管理脚本我们在termux新开一个界面
我们输入
```bash
bash -c "$(curl -L https://raw.githubusercontent.com/RimuruW/Aria2-Termux/master/install.sh)"
```
然后选择安装并配置自启动，然后输入7进行配置查看我们即可看到RPC密钥
### 给alist配置Aria2下载器
我们进入alist的主页面点击下面的管理进入后点击设置->其他在Aria2 密钥处填入RPC密钥即可
### 结尾
这个东西也是花费了我好几天，希望各位小伙伴们能喜欢，其次就是我还想安装小雅来着的，但是小雅的安装有一个访问doker的网络问题，不知道为什么始终连接不上，等我在搞几天
::: details 相关文章
[Android 一键安装配置 Aria2](https://blog.linioi.com/posts/aria2-for-termux/)

[ Android 的 Aria2 一键安装管理脚本](https://github.com/RimuruW/Aria2-Termux)
:::

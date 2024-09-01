---
title: 安卓手机免root安装宝塔面板
published: 2024-07-30 21:06:21
cover: https://www.bt.cn/static/new/images/logo.svg
category: 安卓改造计划
tags:
  - 安卓
  - 宝塔面板
---
### 欢迎来到本期教程，本期的安卓手机改造服务器教程。
### 前言

相信大家家中或多或少都有一些废弃的老手机或者不再使用的手机。虽然这些手机通常被搁置一旁，但其实它们仍然有很多用途。这次我们就来试试在安卓手机上安装宝塔面板。很多人可能会问，宝塔面板不是用在服务器上的吗？没错，但其实安卓的底层是基于Linux系统的，而我们可以通过Termux来接触到这一底层。Termux 是一个在安卓上运行的 Linux 终端模拟器，我们可以在它上面实现很多服务器功能
### 准备工作

1. 安卓手机
2. 电脑
3. Termux

本期教学使用的软件都会放在文章下面欢迎各位小伙伴下载
### 教程
1. 下载[ZeroTermux](https://github.com/hanxinhao000/ZeroTermux)这个是基于termux进行的二次开发，比termux更加好用对新手比较友好
2. 下载并且打开ZeroTermux同意软件的相关条例后右滑点击切换源，建议使用清华源等待安装完成
3. 再次右滑点击容器切换，点击下面的悬浮球创建一个新的容器，他会让重启软件同意即可
4. 再次打开zerotermux,为了方便操作我们使用ssh进行连接，在电脑上进行操作
5. 在zerotermux命令行中输入
```bash
apt install openssh
```
进行安装ssh安装完成后我们需要设置密码输入
```bash
passwd
```
输入密码后回车，输入两次密码即可,在Linux中输入密码是不显示到控制台的
我们打开电脑上的ssh客户端，可以使用[宝塔的ssh终端工具](https://www.bt.cn/new/download.html)进行连接首先在zerotermux中输入
```bash
ifconfig
```
我们即可看到当前的ip地址，在电脑上打开ssh客户端输入对应ip
::: warning
防止小白:127.0.0.1是本机ip无法被其他设备访问，所以访问192开头的或者其他你看到的ip地址
:::
接下来设置端口1200一下端口安卓好像是不能开启的，应该设置一些大端口切不会被其他软件占用的
```bash
sshd -p 3358
```
我们这里设置的是3358端口，当然你也可以改一个自己喜欢的端口，然后电脑上的ssh终端工具填入对应数据即可连接，ssh终端提示连接成功就可以不用管手机了，用电脑操作
6. 安装ubuntu系统，这个是一个Linux系统我们需要在这个系统中部署宝塔面板，我们使用国光大佬的脚本进行安装，首先安装依赖
```bash
pkg install proot git python -y
```
如何就是下载脚本
```bash
git clone https://github.com/sqlsec/termux-install-linux
cd termux-install-linux
python termux-linux-install.py
```
应该是全程不会报错我们就得到了如图所示的窗口
<img src="https://onedrive.live.com/embed?resid=2182F48B953D36F8%2114555&authkey=%21AHGa9T-9MZ2Xm68&width=844&height=552" width="844" height="552" />

我们输入1即可自动安装，安装完成后我们应该是默认在unbuntu系统下，我们输入ps应该会出现报错，报错原因是分区挂载异常
::: danger
Error: /proc must be mounted
  To mount /proc at boot you need an /etc/fstab line like:
      proc   /proc   proc    defaults
  In the meantime, run "mount proc /proc -t proc"
:::
像是这个错误就是/proc分区挂载异常，我们需要退出ubuntu系统，我们输入
```bash
exit
```
当出现~$这个就代表退出成功
接下来我们伪造/proc分区下的五个文件，分别为locdavg,stat,uptime,version,vmstat这五个文件
我们输入命令进行创建
```bash
cd /data/data/com.termux && touch locdavg stat uptime version vmstat
```
伪造locdavg 文件
```bash
echo '0.12 0.07 0.02 2/165 765' > ./locdavg
```
伪造stat文件
```bash
echo -e 'cpu 1957 0 2877 93280 262 342 254 87 0 0\ncpu0 31 0 226 12027 82 10 4 9 0 0\ncpu1 45 0 664 11144 21 263 233 12 0 0\ncpu2 494 0 537 11283 27 10 3 8 0 0\ncpu3 359 0 234 11723 24 26 5 7 0 0\ncpu4 295 0 268 11772 10 12 2 12 0 0\ncpu5 270 0 251 11833 15 3 1 10 0 0\ncpu6 430 0 520 11386 30 8 1 12 0 0\ncpu7 30 0 172 12108 50 8 1 13 0 0\nintr 127541 38 290 0 0 0 0 4 0 1 0 0 25329 258 0 5777 277 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0\nctxt 14022\nbtime 1680020856\nprocesses 772\nprocs_running 2\nprocs_blocked 0\nsoftirq 75663 0 5903 6 25375 10774 0 243 11685 0 21677' > ./stat
```
伪造uptime文件
```bash
echo '124.08 932.80' > ./uptime
```
伪造version文件
```bash
echo 'Linux version 版本 (proot@termux) (gcc (GCC) 编译信息)' > ./version
```
伪造vmstat文件
```bash
echo -e '0\nallocstall_normal 0\nallocstall_movable 0\nallocstall_device 0\npgskip_dma 0\npgskip_dma32 0\npgskip_normal 0\npgskip_movable 0\npgskip_device 0\npgfree 3077011\npgactivate 0\npgdeactivate 0\npglazyfree 0\npgfault 176973\npgmajfault 488\npglazyfreed 0\npgrefill 0\npgreuse 19230\npgsteal_kswapd 0\npgsteal_direct 0\npgsteal_khugepaged 0\npgdemote_kswapd 0\npgdemote_direct 0\npgdemote_khugepaged 0\npgscan_kswapd 0\npgscan_direct 0\npgscan_khugepaged 0\npgscan_direct_throttle 0\npgscan_anon 0\npgscan_file 0\npgsteal_anon 0\npgsteal_file 0\nzone_reclaim_failed 0\npginodesteal 0\nslabs_scanned 0\nkswapd_inodesteal 0\nkswapd_low_wmark_hit_quickly 0\nkswapd_high_wmark_hit_quickly 0\npageoutrun 0\npgrotated 0\ndrop_pagecache 0\ndrop_slab 0\noom_kill 0\nnuma_pte_updates 0\nnuma_huge_pte_updates 0\nnuma_hint_faults 0\nnuma_hint_faults_local 0\nnuma_pages_migrated 0\npgmigrate_success 0\npgmigrate_fail 0\nthp_migration_success 0\nthp_migration_fail 0\nthp_migration_split 0\ncompact_migrate_scanned 0\ncompact_free_scanned 0\ncompact_isolated 0\ncompact_stall 0\ncompact_fail 0\ncompact_success 0\ncompact_daemon_wake 0\ncompact_daemon_migrate_scanned 0\ncompact_daemon_free_scanned 0\nhtlb_buddy_alloc_success 0\nhtlb_buddy_alloc_fail 0\ncma_alloc_success 0\ncma_alloc_fail 0\nunevictable_pgs_culled 27002\nunevictable_pgs_scanned 0\nunevictable_pgs_rescued 744\nunevictable_pgs_mlocked 744\nunevictable_pgs_munlocked 744\nunevictable_pgs_cleared 0\nunevictable_pgs_stranded 0\nthp_fault_alloc 13\nthp_fault_fallback 0\nthp_fault_fallback_charge 0\nthp_collapse_alloc 4\nthp_collapse_alloc_failed 0\nthp_file_alloc 0\nthp_file_fallback 0\nthp_file_fallback_charge 0\nthp_file_mapped 0\nthp_split_page 0\nthp_split_page_failed 0\nthp_deferred_split_page 1\nthp_split_pmd 1\nthp_scan_exceed_none_pte 0\nthp_scan_exceed_swap_pte 0\nthp_scan_exceed_share_pte 0\nthp_split_pud 0\nthp_zero_page_alloc 0\nthp_zero_page_alloc_failed 0\nthp_swpout 0\nthp_swpout_fallback 0\nballoon_inflate 0\nballoon_deflate 0\nballoon_migrate 0\nswap_ra 0\nswap_ra_hit 0\nksm_swpin_copy 0\ncow_ksm 0\nzswpin 0\nzswpout 0\ndirect_map_level2_splits 29\ndirect_map_level3_splits 0\nnr_unstable 0' > ./vmstat
```
然后就在proot启动脚本中添加挂载选项

结构-b 文件路径:/proc/文件名

例：-b /data/data/com.termux/stat:/proc/stat

以国光大佬脚本制作的系统为例
```bash
sed -i '15a command+=" -b /data/data/com.termux/uptime:/proc/uptime"\ncommand+=" -b /data/data/com.termux/vmstat:/proc/vmstat"\ncommand+=" -b /data/data/com.termux/version:/proc/version"\ncommand+=" -b /data/data/com.termux/stat:/proc/stat"\ncommand+=" -b /data/data/com.termux/loadavg:/proc/loadavg"' ~/Termux-Linux/Ubuntu/start-ubuntu.sh
```
这样我们就修复好了/proc分区下的五个文件接着我们进入系统验证

我们输入cd进入到默认目录下然后在输入
```bash
cd ~/Termux-Linux/Ubuntu
./start-ubuntu.sh
```
启动成功后在输入ps应该就没有报错了或者我们严谨一点输入
```bash
ps -ef
```
出现竖着一排一排的文件就算是成功了
接下来我们开始安装宝塔面板，首先还是一样先安装工具
```bash
yes | apt install git iproute2 locales vim
```
安装完成后我们部署宝塔加速包
```bash
git clone https://gitclone.com/github.com/NothingMeaning/pdusb-fast-btpanel
```
可能需要一点时间，安装完成后我们输入
```bash
./pdusb-fast-btpanel/pdbolt-inst-bt-acel.sh
```
接下来前面如果都没有问题那么我们就开始正式安装宝塔面板了
```bash
bash /tmp/btp/pdbolt-bt-install/install.sh
```
我们就能看到熟悉的宝塔安装页面了，我们输入y回车，然后就是漫长的等待了。。。。

安装完成后会出现报错第一个就是赋权错误，我们输入
```bash
chmod -R +x /www
```
要是出现输入这个命令后报错就需要你删除空格然后自己出现打空格这里会等待几秒，要是什么都没有显示就说明赋权成功
接下来修复另外的错误缺少en_US.UTF-8语言环境
```bash
sh: warning: setlocale: LC_ALL: cannot change locale (en_US.UTF-8)
```
依次输入158，在输入3然后就安装完成了可以开始玩宝塔了，输入宝塔启动命令，bt即可看到命令行面板输入
```bash
bt 14
```
即可看到面板地址了
### 劝告
本期教程适合动手能力强，爱折腾的小伙伴，安装宝塔后面板中其实还会遇到很多问题，宝塔是为服务器设计的很多软件的适配对于安卓来说很困难，当然动手能力强的应该也是可以解决的
### 相关文章
::: details 相关文章
[国光大佬](https://www.sqlsec.com/2020/04/termuxlinux.html)Android Termux 安装 Linux 就是这么简单

[Termux安装宝塔面板保姆级教学](https://blog.csdn.net/m0_66678248/article/details/136462877)本期教程由这个大佬提供

[Termux 解决使用ps -ef出现关于挂载/proc分区的错误](https://blog.csdn.net/m0_66678248/article/details/136440403?spm=1001.2014.3001.5501)
:::

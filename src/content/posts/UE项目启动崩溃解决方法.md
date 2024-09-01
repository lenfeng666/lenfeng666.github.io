---
title: UE项目启动崩溃解决方法
description: ue引擎在c++启动时崩溃
published: 2024-07-28 15:02:09
category: UE引擎
tags:
  - UE引擎
---
### 本期带来ue引擎的c++项目启动时出现崩溃的解决方法，其实崩溃的原因有很多种，本期讲解我遇到的崩溃原因和解决方法
<img src="https://onedrive.live.com/embed?resid=2182F48B953D36F8%2114554&authkey=%21ANTs5zZcuC9esx8&width=746&height=600" width="746" height="600" />

相信各位ue靓仔对这个崩溃很熟悉吧，没错就是崩溃了
### 首先排查崩溃原因
> 崩溃原因有显卡显存不足崩溃

解决方法: 降低分辨率或者降低纹理数据，要是无法进入去修改那么就建议重启一下电脑。或者更新显卡驱动，用epic进行资源完整校验
> 崩溃原因和我这个图片一样的

检查自己电脑代理如果开启了就会导致项目中的“DerivedDataCache”无法启动，这个东西真的老六找了许久在找到问题

::: details 相关链接
> [Unreal 5.4 崩溃/无法启动“DerivedDataCache”](https://forums.unrealengine.com/t/unreal-5-4-crash-will-not-start-deriveddatacache/1776423/16)
:::

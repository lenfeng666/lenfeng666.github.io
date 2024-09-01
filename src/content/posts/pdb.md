---
title: 虚幻引擎官方纯c++项目启动提示未加载unrealeditor core pdb
published: 2024-07-23 16:49:13
category: UE引擎
tags:
  - UE引擎
---
#### 本期讲解我遇到的一个虚幻项目的毛病

#### visual studio code启动纯c++项目时报错提示未加载unrealeditor core pdb，虽然这个东西可能有大佬能解决，但是这个报错有时候确实难住了我，我记得我什么也没干关机后第2天启动就出现了这个错误，如果你有解决方法那么可以尝试在GitHub上给我留言感谢，那么我就说一下我目前以知的几个解决方法

1. 菜单栏：调试 -> 选项 -> 常规 -> 调试 -> 符号 --Microsoft符号服务器 ->勾选，然后等待加载，加载完成后在次打开取消勾选然后清空符号缓存，这个方法只能解决一时的问题，后期还是出现了

2. 来自GitHub一位大佬说的是因为引擎不是源码版本导致没有这个调试文件，可以尝试附加这个调试文件(这个调试文件应该是通用的有人用ue4的给ue5引擎也认)

3. 还有一种就是直接换编译引擎，我之前使用visual studio code进行编译，遇到文件问题我会选择换编辑引擎ide全家桶中的DR就非常不错，缺点就是不免费当然这也不是长久的事情

至少我还去重点关注过这个问题，因为c++学起来真的令人头大，最后分享几篇类似的解决文章

::: details 相关链接
> [调试的时候提示未加载UnrealEditor-SkeletalMeshUtilitiesCommon.pdb · Issue #9 · QSWWLTN/DigitalLife (github.com)](https://github.com/QSWWLTN/DigitalLife/issues/9)

> [彻底解决VS加载符号与查找PDB文件问题_vs运行,未加载kernelbase.pdb-CSDN博客](https://blog.csdn.net/qq_41308027/article/details/88602961)
:::


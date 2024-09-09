# 简介

- nvm：node版本管理工具，通过它可以安装多种node版本并且可以快速、简单的切换node版本。
- Node.js：是运行在服务端的JavaScript，是一个基于Chrome JavaScript 运行时建立的一个平台。
- NPM：是随着NodeJs一起安装的包管理工具
- pnpm：比NPM更好用的包管理工具

# nvm

[nvm下载](https://github.com/coreybutler/nvm-windows/releases)

#### 安装

下载.exe文件安装，注意nvm和node的安装路径都不能有中文。

可以在D盘下自动义位置创建一个NvmAndNode文件夹(本机在D:\Program Files\NvmAndNode)，用于存放安装时需要设置的nvm和nodeJs安装位置

#### 设置镜像下载地址

在nvm安装路径下settings.txt新增以下内容（文件中原本的root和path是nvm和node的安装路径），保存的时候可能无权限，右键属性修改权限

```
node_mirror: https://cdn.npmmirror.com/binaries/node/
npm_mirror: https://cdn.npmmirror.com/binaries/npm/
```

#### 命令

> 注意：安装和卸载需以管理员身份运行命令窗口

```
nvm -v
	查看当前nvm版本号
nvm list available
	查看可用的部分在线版本，推荐使用LTS下的稳定持续维护版本
nvm install 版本号
	安装指定Node版本，版本号为lts即安装LTS下最新版本
nvm uninstall 版本号
	卸载版本
nvm ls
	查看已安装版本
nvm use 版本号
	切换版本
```

# Node.js

#### 安装

两种安装node的方式，直接下载解压/使用nvm，推荐使用nvm

[node下载](https://nodejs.org/dist/)

点击进入往下滚动找到你要的版本号，然后点版本号进去。
例如我要的node版本是14.17.4，直接下载node-v14.17.4-win-x64.zip 这个包

下载后解压到nvm目录下（不知道安装目录在哪就去查看环境变量），并改文件名改成v14.17.4（下载了哪个版本号就改为什么版本号名称）

# pnpm

#### 安装

> 安装需以管理员身份运行命令窗口

```
npm install pnpm -g
	全局安装pnpm
```

#### 修改镜像

```
pnpm config get registry
	查看当前pnpm下载地址
pnpm config set registry http://registry.npmmirror.com
	切换为阿里云镜像命令
```

#### 允许本机脚本执行

> 未设置允许本机脚本执行node项目只可在cmd中运行，vsCode中无法使用

① 管理员身份运行 window powershell
② 执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的;
③ 执行：set-ExecutionPolicy RemoteSigned
④ 输入：A

# pnpm和npm区别

在创建和运行项目方面，PNPM 和 npm 之间有一些区别，主要涉及包管理和依赖管理方面。

1. **包管理**：
   - **npm**：npm 是 Node.js 的官方包管理工具，它会在项目目录下的 node_modules 文件夹中安装所有的依赖包。每个项目都会有自己的 node_modules 文件夹，并且会独立地安装依赖。
   - **PNPM**：PNPM 是一个第三方的包管理工具，它通过使用硬链接和符号链接的方式，将依赖包共享存储在一个全局的存储库中，而不是在每个项目中都复制一份。这样可以节省磁盘空间，并且加快了安装速度。
2. **依赖管理**：
   - **npm**：npm 默认会将项目的依赖项保存在 package.json 文件中，并且每个依赖项都会指定一个具体的版本号。npm 提供了 `npm install` 命令来安装项目的依赖，并且可以使用 `npm audit` 来检查依赖的安全性。
   - **PNPM**：PNPM 也会将依赖项保存在 package.json 文件中，但它不会在 package.json 中记录所有的依赖版本。相反，它会记录依赖的范围，然后根据需要动态地安装和管理依赖的版本。PNPM 也提供了安全检查功能。
3. **运行项目**：
   - **npm**：通过 npm，你可以使用 `npm start`、`npm run <script>` 等命令来运行项目中定义的脚本。
   - **PNPM**：PNPM 也支持通过类似的命令来运行项目中的脚本，但是由于 PNPM 的工作方式不同，它可能在运行时会有一些微妙的差异。但一般情况下，PNPM 应该能够正确运行项目中定义的脚本。

综上所述，主要区别在于包管理和依赖管理方面。PNPM 提供了一种更高效的包管理方式，可以节省磁盘空间并加快安装速度，但在某些情况下可能会引入一些微妙的行为差异。因此，你可以根据自己的需求选择适合的工具。
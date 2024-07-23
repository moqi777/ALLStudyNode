# Maven

## 1. 什么是Maven

maven是基于项目对象模型（Project Object Model简称pom），是为了管理整个项目声明周期的（项目创建 -> 项目使用 -> 项目打包 -> web服务器发布）前三个maven负责 最后一个tomcat负责

[maven版本库](https://archive.apache.org/dist/maven/maven-3)

[maven官网](https://maven.apache.org/)

[Maven依赖库](https://mvnrepository.com/)

## 2. maven安装使用

- maven下载安装

  - 进入官网点入Use项的Download

  - 下拉点击apache-maven-3.8.3-bin.zip下载，或者从maven版本库中下也可以解压到指定文件夹

  - 打开解压后的apache-maven-3.8.3-bin.zip中的bin

  - 地址栏输入cmd进入控制台

  - 输入mvn -version弹出配置信息证明安装完成

- 配置环境变量

  - win+r输入sysdm.cpl进入环境变量

  - 用户变量新建MAVEN_HOME变量

  - 变量值输入D:\apache-maven-3.8.3(bin所在的地址)

  - 在用户变量中的path新建%MAVEN_HOME%\bin

  - 直接win+r输入cmd，输入mvn -version弹出配置信息证明环境配置成功

- 配置mavan配置文件（进入D:\MyMaven\apache-maven-3.8.3\conf\settings.xml）

  - 配置本地仓库：在本地磁盘备份一次 第一次下载对应依赖(jar包)从远程仓库下载到本地仓库 目的是为了第二次使用相同依赖 不用再次下载 可以重复利用

  ```xml
  <!-- 配置方式：第55行左右配置,中间是本地仓库地址，配置完后导包时会自动创建这个文件夹，并将所有jar包存放在这 --><localRepository>D:/MyMaven/mavenRepository</localRepository>
  ```

  - 配置远程仓库：默认访问国外服务器 由于需要翻墙 网络会有影响 一般中大型公司都会从远程仓库下载所有依赖 当成远程仓库的镜像 最后只需要访问公司内部仓库镜像 这样网络不会出现太大的问题 推荐：阿里云仓库地址

  ```xml
  <!-- 配置阿里云仓库(镜像仓库),进入到158行左右将代码粘贴到<mirrors> </mirrors>标签内保存即可 -->
  <mirror>  
      <id>nexus-aliyun</id>  
      <mirrorOf>central</mirrorOf>    
      <name>Nexus aliyun</name>  
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>  
  </mirror>
  ```

## 3. IDEA集成maven

- 打开左上角File——>Settings——>Build,Execution,Deployment——>Build Tools——>Maven

- Maven home directtory选择自己的解压地址

- 下面两个地址：

  - 第一个填入D:\MyMaven\apache-maven-3.8.3\conf\settings.xml

  - 第二个填入D:\MyMaven\mavenRepository，选择了解压地址后一般这个会自动识别

![73e3fdd40797e9e20515145ab4f4c3f8](https://s2.loli.net/2024/07/23/Gq92EjXHtoi14rV.png)

==注：通过idea如果打开了新的窗口，这些配置信息会清空，所以上诉的步骤要重新做一遍，旧的窗口重新打开无需重配，新建maven项目时可能也会让你确认==

## 4. 创建Maven项目

分为创建项目（project）和新建模块（Module）

#### 4.1 新建项目步骤

UDEA——>File——>New——>Project——>左侧Maven——>next——>next

GroupId:全球唯一id

ArtifactId:名字

src下两个文件夹：

main:主使用包

test:测试包

方法上打@Test 可直接运行方法

没有导包Test可打出@Test后Alt+Enter弹出导包提示

#### 4.2 新建模块步骤

ctrl+shift+alt+s：打开项目管理界面

或者直接点右上角这个按钮

![image-20240723144555903](https://s2.loli.net/2024/07/23/j1er4h86O5XHoSJ.png)

新建一个Module

![image-20240723144252375](https://s2.loli.net/2024/07/23/xGgA8IU5vzMTPLu.png)

新建一个Maven类型的模块，创建同时添加一些原型，在此添加一个webapp的，注意是maven开头的webapp，添加了webapp原型后会自动在pom文件中导servlet的一些包，但是没有了test文件夹和java文件夹，需要手动添加

![image-20240723144528113](https://s2.loli.net/2024/07/23/YLwR2nVBoSlxbym.png)

输入项目名称、组ID、版本号，组ID为公司域名的倒序，版本号默认1.0

![image-20240723152649596.png](https://s2.loli.net/2024/07/23/ayiAf9EXo3YwZMF.png)

点击next可能会跳出让你确认信息，其中有关于maven配置文件和本地仓库的配置，如果是idea自带的配置记得修改

==注：第一次新建maven项目会需要导入很多的依赖包，不要断网，否则会失败==

#### 4.3 普通项目添加maven工程

右键项目文件夹，选中Add Framework Supprtt...

选择Maven后即可

在右上角的放大镜图形按钮左边第二个点开，Modules中的Dependencies管理项目依赖

## 5.maven项目目录结构

蓝色的是java代码目录，一串油桶一样标志的是配置文件目录，有个小蓝点的是web目录，如果没有这个文件夹需要自己手动创建，创建后没有特殊标记要自己手动标记文件夹，手动标记方式：右键文件夹 -> Mark Directory as -> 选择标记（Sources Root是java目录标记，Recources Root是配置目录标记）

![6fc2bfc26a7833d851682eac65747b8e.png](https://s2.loli.net/2024/07/23/ewOsbBxracLzjKV.png)

- main：项目核心代码

  - java：存放项目java源代码 *.java存储位置
  - resources：存储项目配置文件，如果放在其他目录不识别
  - webapps：一般前后端不分离项目才需要使用的包 前端目录(页面 css js img)
    - WEB-INF：这个包里面的内容不能对外访问（不能通过地址直接访问），只能通过服务器转发访问
      - web.xml：是web项目配置文件 默认随着tomcat服务器启动自己加载
    - index.jsp：是web项目的默认首页 如果只访问当前项目时 默认进入的页面

- test：项目测试代码

  方法上打@Test 可直接运行方法，没有导包Test可打出@Test后Alt+Enter弹出导包提示

  - java：测试相关java源代码 junit测试
  - resourse：存放测试相关配置文件

- pom.xml：整个maven项目唯一配置文件 用于管理整个项目声明周期 

==注：java、resources、webapps都是根目录，原因在于项目随着服务器编译发布他们会变成一个目录==

## 6. pom.xml解析

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!--  xml版本信息 一般放在第一行 -->

<!--根节点：xml根节点只有一个
    xml早期：可扩展标记语言 标签是可以自定义的 默认每个标签没有任何意义
    前期xml应用场景主要用于做数据传递，还可以实现数据库存储 后期出现了json取代了xml数据传递
    后期数据库取代了xml存储数据 所以到目前为止xml一般被当成配置文件存在
    但是xml本身的标签是可以自定义的没有任何含义
    所以每个框架或者技术都为xml设置了一套规则（可以放哪些根节点、子标签，哪些值） 又叫约束
    约束主要分为两种：DTD约束（初级）  schema约束（高级）
    html：超文本标记语言 h1 div p table
-->
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
<!--  组id：公司域名倒序-->
  <groupId>com.sc.240601</groupId>
<!--  项目名-->
  <artifactId>Servlet</artifactId>
<!--  版本号：随着项目更新迭代 1.0 1.1 1.12 2.0-->
  <version>1.0-SNAPSHOT</version>
<!--  打包方式：
  jar：将项目所有内容 打包成 XX.jar 一般javaSE项目 或者 springboot项目会使用
  war：将项目所有内容 打包成 XX.war 一般来说普通的web项目（servlet，SSM）
  pom：不是打包 叫做聚合项目 一般来说父项目才需要配置成pom 不会编译的
  只用于子项目继承 子项目就无需再次导入重复的依赖
-->
  <packaging>war</packaging>
<!--右边 maven界面显示的名称-->
  <name>Servlet Maven Webapp</name>
  <!-- FIXME change it to the project's website -->
  <url>http://www.example.com</url>

<!--  设置通用属性：一般自带编码方式 和 maven编译的版本 推荐1.8
      同时还可以设置项目依赖的通用版本号
      设置方式：写任意标签（成对的）
      使用方式：下面 ${任意的标签} 获取版本号
      好处：可以通用 可以统一修改版本
-->
  <properties>
    <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    <maven.compiler.source>1.8</maven.compiler.source>
    <maven.compiler.target>1.8</maven.compiler.target>
  	<junit-version>4.11</junit-version>
  </properties>

<!--  设置依赖：最核心的，有几对dependency便签就添加了几个依赖(jar)
      一般可以通过 https://mvnrepository.com/ 手动查找 哪个dependency标签
-->
  <dependencies>
    <dependency>
      <groupId>junit</groupId>
      <artifactId>junit</artifactId>
      <version>${junit-version}</version>
<!--    score标签：用于制定jar包作用范围
        test：制定jar包测试范围有效 编译和打包不会使用该依赖
        provided：已提供 比如：jsp和servlet 服务器自带的包 不需要重复导入
        comlile：默认方式 编译范围有效 打包的时候会使用该依赖
        runtime：项目运行时才会需要的依赖 编译时候不需要
  -->
      <scope>test</scope>
    </dependency>
      ...
  </dependencies>

<!--  构建标签：-->
  <build>
<!--  项目编译后的名字-->
    <finalName>Servlet</finalName>
<!--  配置maven插件-->
    <pluginManagement><!-- lock down plugins versions to avoid using Maven defaults (may be moved to parent pom) -->
      <plugins>
        <plugin>
          <artifactId>maven-clean-plugin</artifactId>
          <version>3.1.0</version>
        </plugin>
        ...
      </plugins>
    </pluginManagement>
  </build>
</project>
```


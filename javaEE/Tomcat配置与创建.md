# Tomcat配置与创建

## Tomcat配置

将依赖包 apache-tomcat-8.5.41.zip解压到指定文件夹（本机在D盘下）中，注意路径不能有中文

![](../../../A-学习资料/JAVA/img/Tomcat目录结构.png)

证明配置成功：打开bin，点击startup.bat打开黑窗口运行，在浏览器中输入localhost:8080,会出现一个tomcat的页面，证明成功配置tomcat。点击shutdown.bat打开黑窗口关闭运行。

修改端口号：conf——>server.xml，找到

```
<Connector port="8080" redirectPort="8443" connectionTimeout="20000" protocol="HTTP/1.1"/>
```

修改port即可



## 创建一个Tomcat的javaWeb项目

### 创建javaWeb项目：

IDEA——>File——>new——>project——>Java

选中Java EE中的Web Appliccation，创建即可

或可直接创建一个project，创建后右键项目文件夹，选中Add Framework Supprtt...

选择Web Application后OK也可

### 添加Tomcat：

创建javaWeb项目后在IDEA界面右上处点击Add Configuration...后弹出一个界面

点击左边的Templates拉到最下面选择Tomcat Server中的Local

点击弹窗右上角Configure...按钮，在Tomcat Home框中填入apache-tomcat-8.5.41.zip解压后的文件夹，然后一路ok

再次执行第一步打开弹窗，点击左上角的+号，添加Tomcat Server中的Local

点击Fix后的Application cantext输入框中可以修改路由，之后记得Apply

如果没有Fix，点上门的Deployment，然后点右上处+，点Artifact...便可以修改路由了

测试：

​	运行代码，需要等待一会儿，之后会自动弹出浏览器显示页面，也可自定义浏览器输入localhost:8080显示页面




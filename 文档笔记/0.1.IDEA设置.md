## 1. 设置java文件默认备注

新建一个java文件会自动设置默认备注

IDEA -> File -> setings -> Editor -> File and Code Templates

```java
#if (${PACKAGE_NAME} && ${PACKAGE_NAME} != "")package ${PACKAGE_NAME};#end
    /**
 *@author:zhengyilong
 *@email:1797344574@qq.com
 *@phone:13479394730
 *@desc:
 *@DateTime:${DATE} ${TIME}
 **/
#parse("File Header.java")
public class ${NAME} {
}
```

## 2. 解决IDEA中文乱码

[解决IDEA中文乱码五个方法](https://www.jb51.net/program/323537olj.htm)

## 3. lombok使用

#### 1. 介绍

- 定义：Lombok 是一种 Java 实用工具，可用来帮助开发人员消除 Java 的冗长，尤其是对于简单的 Java 对象（POJO）。它通过注解实现这一目的。



拿lombok官网的一个例子来说:

```
public class Mountain{
    private String name;
    private double longitude;
    private String country;
}
```



要使用这个对象,必须还要写一些getter和setter方法,可能还要写一个构造器、equals方法、或者hash方法.这些方法很冗长而且没有技术含量,我们叫它**样板式代码**.

lombok的主要作用是通过一些注解，消除样板式代码，像这样：

![a2bed7a1f670361d93f1c51208d200fe_r.png](https://s2.loli.net/2024/07/24/7YAR2a3GdjczSZp.png)

如果觉得@Data这个注解有点简单粗暴的话,Lombok提供一些更精细的注解,比如@Getter,@Setter,(这两个是field注解),@ToString,@AllArgsConstructor(这两个是类注解).

具体使用在https://www.zhihu.com/question/42348457中

#### 2.配置

首先在IDEA插入插件：settings-->Pluging-->右侧搜索框搜Lombok，图标为一个小辣椒，下载重启插入

然后将jar包导入项目lib中即可使用

jar包下载地址https://projectlombok.org/download

Manve项目下载地址https://mvnrepository.com/artifact/org.projectlombok/lombok

```
<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.22</version>
    <scope>provided</scope>
</dependency>
```

#### 3. 实例(常用)

````java
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class User {
    private int userId;
    private String userName;
    private String userPwd;
    private String userRealname;
    private String userImg;
}
````

@Data包括了get和set

@NoArgsConstructor是无参构造器

@AllArgsConstructor是有参构造器

@ToString构造器

## 4. idea图形化数据库

连接一个库使其在IDEA里类似于navicat图像化工具一样使用步骤

- 第一步，在IDEA的主页面按照如下图步骤操作

![image.png](https://s2.loli.net/2024/07/24/gGIolmAb5pQ7Hi4.png)

- 第二步 打开这个界面说明成功

![image.png](https://s2.loli.net/2024/07/24/p3cUhqWakb8eVmE.png)

- 第三步：选择驱动

![image.png](https://s2.loli.net/2024/07/24/PNDHWaKQjEmqGXU.png)

- 第四步：

![image.png](https://s2.loli.net/2024/07/24/wAJNi95yTQqDu8n.png)

![image.png](https://s2.loli.net/2024/07/24/ez1TgWiLGouRwha.png)

![image.png](https://s2.loli.net/2024/07/24/fPYvxwyLtBJq8sa.png)

![image.png](https://s2.loli.net/2024/07/24/hpLPabz8ywMxlNe.png)

- 第五步

![image.png](https://s2.loli.net/2024/07/24/YbzZsK1JfpCP7hn.png)

第四步地址参考：

jdbc:mysql://127.0.0.1:3306/sc240601?useUnicode=true&characterEncoding=utf-8&autoReconnect=true&rewriteBatchedStatement=true&serverTimezone=Asia/Shanghai

显示连接成功的页面

![image.png](https://s2.loli.net/2024/07/24/inHq48huR1js7ta.png)

![image.png](https://s2.loli.net/2024/07/24/S8BvFEn4TKZp73Q.png)

## 5.小蓝鸟mybatisX

与lombok导入插件方式一样，搜索mybatisX就好

作用：mybatis中映射文件的<insert>等标签就可以通过小蓝鸟与对应的接口了，点击可以跳转

![image-20240807193853072](https://s2.loli.net/2024/08/07/WBgiJwbFxsK9dD7.png)

# JDBC

## 1. 为什么要学jdbc

早期存储数据 是通过序列化存储，缺点是不适合做大量数据存储，所以如果是大量数据还是推荐使用数据库技术。所以最后还需要学习 java和数据库技术 之间的交互，这个就是jdbc技术的作用 而且jdbc学习也是为了以后更好学习Mybatis框架基础。

## 2. 什么是jdbc

jdbc(java data base connection)：是java数据库连接的简称，是javaEE一个核心组件，是一种用于执行sql语句javaAPI，它里面提供了一套完整类和接口，这些接口定义了访问数据库的规则，但是具体的实现哪种数据库 需要根据数据库厂商提供的``驱动包（jar包）``来访问

## 3. JDBC涉及类和接口 ---笔试题

- DriverManager：驱动管理类，根据加载好的驱动包信息，可以创建对应数据库的连接
- Connection：数据库连接对象 负责和数据库交互的 还负责创建Statement对象
- Statement：用于执行sql语句的（增删改查）
- ResultSet：只有查询语句会返回结果集 保存查询语句的查询结果 具体如何获取数据 类似于迭代器遍历

![3168f11f6422f1ea6f78612af2dd3de4](https://s2.loli.net/2024/07/18/7i1HJhubCDme8rB.jpg)

## 4.  jdbc使用步骤 ---面试题

- 加载驱动类 （`前提：需要先导入好驱动包`）
- 通过DriverManger管理驱动类 创建数据库连接
- 通过Connection连接对象 创建Statement对象
- 通过statement对象执行sql语句
- 只有查询语句才有这步，处理ResultSet结果集对象
- 关闭资源

```java
//1.加载驱动类（前提导入驱动包）
//mysql 5X：com.mysql.jdbc.Driver
//mysql 8X：com.mysql.cj.jdbc.Driver
//oracle：oracle.jdbc.driver.OracleDriver
Class.forName("com.mysql.cj.jdbc.Driver");
//2.DriverManager驱动管理类 创建数据库连接
/**
    请求地址：统一资源定位符 俗称网址
    协议://ip地址:端口号/项目资源(数据库名)?可选参数
    可选参数：可以让操作数据库时 数据不会出现不一致(比如乱码和时区)
    写法类似于map集合的每一组参数都是基于key=value&key2=value2&...
    常用可选参数：不用背 以后使用直接CV
    1.useUnicode：表示unicode编码来进行存储
    2.characterEncoding：修改字符集编码（让中文不乱吗）
    3.autoReconnect：是否自动连接
    4.rewriteBatchedStatement：是否开启批处理
    5.serverTimezone：设置时区 mysql8版本一般需要设置 是看数据库和系统时间是否有差异
    6.useSSL：是否使用SSL协议    一般mysql 5.7需要配置这个
 **/
String url = "jdbc:mysql://127.0.0.1:3306/sc240601?" +
        "useUnicode=true&" +
        "characterEncoding=utf-8&" +
        "autoReconnect=true&" +
        "rewriteBatchedStatement=true&" +
        "serverTimezone=Asia/Shanghai";
String username = "root";
String password = "kaipule452b.";
Connection conn = DriverManager.getConnection(url,username,password);
//3.通过连接对象创建Statement对象
Statement stmt = conn.createStatement();
//4.通过Statement执行sql语句
/*
可以用于增删改查四种语句，但是返回值是一个boolean类型
无法查看 查询的数据  不推荐这种方式
stmt.execute(sql语句);
适用于 增删改 三种语句，返回值是int（受影响的行数） 推荐使用
stmt.executeUpdate(sql语句);
适用于查询语句 返回值是ResultSet   推荐使用
stmt.executeQuery(sql语句);
适用于执行批量操作的时候 比如批量新增100条数据
stmt.executeBatch();//前面需要结合addBatch(sql)
 */
String sql="select * from dept";
//如果sql语句里面 有参数 还需要传递参数
ResultSet set = stmt.executeQuery(sql);
//5.只有查询才需要处理结果集（目的是为了取出查询的数据）
/*
类似于迭代器 hasNext()判断是否有 next()获取
 .next()等价于迭代器hasNext()
 含义表示每次获取一行数据 然后删除该行 初值指向第0行
 */
while (set.next()){
    //进入循环表示 获取出了一行数据 下面就需要把这行数据每个字段的值获取出来
    // .get类型(数值) 根据你查询出来的第几个字段 不推荐使用不适合复杂查询
    // .get类型(字符串) 根据你表中字段名称 获取每个字段的值
    int id = set.getInt(1);
    String dname = set.getString("dname");
    String loc = set.getString("loc");
    //后续。。。 看需求 打印或者封装对象 集合
    System.out.println(id+" "+dname+" "+loc);
    //java先需要定义一个类表示部门 类中需要有跟数据库字段一样的属性
    //这种类 以后java称之为 实体类：用于描述表中数据的
    //Dept d=new Depy(deptno,dname,loc);
    //list.add(d);
}
//6.释放资源(创建的对象都需要释放)
//释放资源要注意顺序 遵循栈的原则 先创建后关闭
set.close();
stmt.close();
conn.close();
```

使用``.executeQuery()``时的缺点

- 日期类型需要处理一下 方式1：直接字符串 方式 2：util.Date==>sql.Date
- 传递字符串参数 需要两端拼接单引号
- sql注入的问题
- 拼接多个参数的时候 特别繁琐

## 5. sql注入 --- 高频面试题

sql注入：前端传递一些非法参数，通过字符串拼接的方式 处理sql语句 执行时 可能执行结果不是按照预期执行 最终达到欺骗服务器的目的

比如：delete from 表 where name="用户名" or 1=1;	这里 or 1=1 就是非法参数 结果name条件可能不成立 但是1=1永远成立 最后会造成全表数据删除

#### 5.1 解决方案

使用预编译对象 PreparedStatement 来解决sql注入的问题，它会先编译sql语句 把sql语句结构固定，sql语句参数通过`?`作为占位符，同时还可以实现一次编译多次运行 执行效率会高一些

```java
Class.forName(driver);
Connection conn = DriverManager.getConnection(url, username, password);
//创建预编译对象 先编译sql 后运行 参数通过?来占位
String sql ="delete from user where name=?";
PreparedStatement pstmt = conn.prepareStatement(sql);
//执行语句之前 处理一下问号 给问号赋值
//pstmt.set类型(整数：第几个问号,数据)
pstmt.setString(1,name);
pstmt.executeUpdate();
//关闭资源
pstmt.close();
conn.close();
```

`结合批处理代码实现`

```java
Class.forName(driver);
Connection conn= DriverManager.getConnection(url,username,password);
String sql="insert into myUser values(null,?,?,?,?)";
PreparedStatement pstmt=conn.prepareStatement(sql);
List<MyUser> list=getUsers();//调用一个方法 返回对象集合100个
for(MyUser u:list) {
    //给?赋值  一定要和上面定义的sql 一一对应
    pstmt.setString(1,u.getName());
    pstmt.setDate(2,new java.sql.Date(u.getTime().getTime()));
    pstmt.setInt(3,u.getCard());
    pstmt.setString(4,u.getSex());
    pstmt.addBatch();//执行该条语句add同时上面四行数据清空
}
//执行批处理(一口气执行里面保存的所有sql语句)
pstmt.executeBatch();
pstmt.close();
conn.close();
```

#### 5.2 preparedStatement和Statement区别

- Statement：
  - 是通过字符串拼接的方式处理参数
  - 会存在sql注入的隐患，非常不安全 不推荐使用。
  - 也是mybatis框架底层`${}`实现方式
- PreparedStatement：属于Statement子类，是`预编译`对象 
  - 是采用`?`作为占位符形式处理参数 可以防止sql注入隐患 比较安全 推荐使用。
  - 先编译sql语句 多次运行 执行效率会高于Statement 
  - 也是mybatis框架底层`#{}`实现方式

## 6. 封装工具类

`config/jdbc.properties`

```properties
# properties配置文件 是最简单的配置文件
# 类似于map集合 也是基于key=values
# java程序可以读取它 根据key 获取里面value
# 没有双引号 没有分号
driver=com.mysql.cj.jdbc.Driver
url=jdbc:mysql://127.0.0.1:3306/sc240601?useUnicode=true&characterEncoding=utf-8&autoReconnect=true&rewriteBatchedStatement=true&serverTimezone=Asia/Shanghai
username=root
password=kaipule452b.
```

`util/DBUtil`

```sql
package util;

import lombok.SneakyThrows;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.sql.*;
import java.util.Properties;

/**
 * @author:zhengyilong
 * @email:1797344574@qq.com
 * @phone:13479394730
 * @desc:
 * @DateTime:2024/7/22 11:23
 **/
//jdbc工具类：将jdb所有共同的操作统一处理，防止代码冗余
//工具类方法都是静态的 都是为了通过类名.方法 方便使用的
//比如：Arrays.sort()
//jdbc：哪些是可以统一处理的
//1.加载驱动类 只做一次 最先做
//2.创建连接 要做多次 由于代码都一样
//3.url driver username password    如果切换数据库
//可能会修改 可以把他们单独提出来 当成一个文件 这样就不用去修改类
//这样程序只要读取这个文件(配置文件properties yml xml) 就可以得到这些配置
//4.关闭资源 因为都需要关闭
//5.增  删  改  可以编写一种通用写法
//6.查询 也可以写一个半通用写法 rs返回
public class DBUtil {
    //不推荐直接复制 在properties配置文件编写 读取赋值即可
    private static String driver;
    private static String url;
    private static String username;
    private static String password;
    static {
        //配置文件不是java文件 不会随着项目启动 main运行自动加载
        //一般都必须 先读取配置文件 才能获取里面的内容
        // 路径：直接根目录(蓝色的包)开始找
        InputStream is = DBUtil.class.getClassLoader().getResourceAsStream("config/jdbc.properties");
        //创建properties对象
        Properties p = new Properties();
        try {
            //通过InputStream对象 将数据封装到properties中
            p.load(is);
            driver = p.getProperty("driver");
            url = p.getProperty("url");
            username = p.getProperty("username");
            password = p.getProperty("password");
            //直接加载驱动类
            Class.forName(driver);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    //创建连接通用方法
    public static Connection getConn(){
        try {
            return DriverManager.getConnection(url,username,password);
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
    //关闭连接通用方法，通过传参的顺序 来控制关闭的顺序
    public static void close(AutoCloseable... able){
        for (AutoCloseable a : able) {
            if (a!=null) {
                try {
                    a.close();
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }
        }
    }
    //增删改通用方法
    //bug：sql语句占位符个数 一定要和后面参数o数组长度一致 顺序也得一致
    public static int update(String sql, Object ... o){
        Connection conn = getConn();
        try {
            PreparedStatement pstmt = conn.prepareStatement(sql);
            if (o!=null){//是否有参数
                for (int i = 0; i < o.length; i++) {
                    pstmt.setObject(i+1,o[i]);
                }
            }
            int i = pstmt.executeUpdate();
            System.out.println("受影响的行数："+i);
            close(pstmt,conn);
            return i;
        } catch (SQLException e) {
            e.printStackTrace();
            return -1;
        }
    }
    //查询通用方法
    //存在两个问题：
    // 1：返回的是ResultSet 需要用户自己封装数据
    // 2：查询的方法不能关闭资源 因为用户还需要处理结果集 处理完之后才可以关闭
    public static ResultSet select(String sql, Object... o){
        Connection conn = getConn();
        try {
            PreparedStatement pstmt = conn.prepareStatement(sql);
            if (o!=null){//是否有参数
                for (int i = 0; i < o.length; i++) {
                    pstmt.setObject(i+1,o[i]);
                }
            }
            return pstmt.executeQuery();
        } catch (SQLException e) {
            e.printStackTrace();
            return null;
        }
    }
}
```


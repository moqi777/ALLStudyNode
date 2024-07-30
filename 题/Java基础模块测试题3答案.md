## 一、单选题

![bcfde0bc2792e15c32cbc0a4aec6d360](https://s2.loli.net/2024/07/30/CAwcNOkYHPudRFV.png)

==单选10题答案改D==

==多选9题答案改ABC==

## 主观题

**1.** ***\*什么是类？什么是对象？什么是接口？接口和类的继承有什么本质区别？\****

 类：将相同的事物提供他们共同的特征抽象出来的概念，类是属于对象模版

对象：是现实世界中客观存在的，对象是类的实例

 接口：是java的一种规范，只定义声明没有定义实现 定义了一组方法 但是并没有实现具体逻辑，通常需要通过实现类来负责 这些方法的执行逻辑

 继承：通过继承 子类可以直接复用父类的方法和属性 而且还可以进行方法重写体现每个子类行为。继承还可以体现出多态性

接口：接口不提供 方法的实现，其他类可以实现接口 但是必须要实现接口中的所有方法，否则就是抽象类。接口是通过不同实现类实现同一个接口来体现多态性的，使用者 可以通过接口的形式来使用 这样可以不关心具体的实现类



**2.** ***\*简单说下包装类和原生类？\****

 原生类：属于基本数据类型 比如int  不具有类的特征(属性和方法) 默认值是0

包装类：是java根据基本类型 做封装 目的是让基本类型也具有类的特征 比如：Integer 所以包装类型 可以调用属性和方法 默认值是 null

 

**3.** ***\*说一说JVM的主要组成及其作用？\****

 堆：

方法区：

虚拟机栈：

本地方法栈：

程序计数器：

 

**4.** ***\*默写选择排序\****

 ```java
 int[] nums={7,9,3,6,8,4,0,3};
 for (int i = 0; i < nums.length - 1; i++) {
     int index = i;
     for (int j = i+1; j < nums.length; j++) {
         if (nums[index] > nums[j]){
             index=j;
         }
     }
     if (i!=index){
         nums[i]=nums[i]^nums[index];
         nums[index]=nums[i]^nums[index];
         nums[i]=nums[i]^nums[index];
     }
 }
 System.out.println(Arrays.toString(nums));
 ```

 

**5.** ***\*使用字节流将d:/1.txt 复制到d:/2.txt。\****

 ```java
 FileInputStream fis = new FileInputStream("d:/1.txt");
 FileOutputStream fos = new FileOutputStream("d:/2.txt");
 byte[] bs = new byte[1024];
 int len;
 while((len=fis.read(bs))!=-1){
     fos.write(bs.getBytes());
 }
 fis.close();
 fos.close();
 ```



**6.** ***\*在一个房间里有一只猴子和n个桃子，猴子可以选择一次拿1个，也可以选择一次拿2个，也可以选择一次拿3个。猴子吃完桃子一共有多少种方法。\****

猴子可以每次拿1个  2个  3个 最后如果求n个桃子有几种情况
只有三种方式:
最后只剩下1个桃子 ，之前拿完了n-1个方法数: db[n-1];  
最后只剩下2个桃子,  之前拿完了n-2个方法数: db[n-2];
最后只剩下3个桃子,  之前拿完了n-3个方法数: db[n-3];

dp[n]=dp[n-1]+dp[n-2]+dp[n-3];

```java
public static int count(int n){
    int[] dp=new int[n+1];
    dp[0]=1;//没有桃子 只有一种情况 不吃的意思
    for (int i = 1; i <=n; i++) {
        if (i==1) dp[i]=dp[i-1];
        else if (i==2) dp[i]=dp[i-1]+dp[i-2];
        else dp[i]=dp[i-1]+dp[i-2]+dp[i-3];
    }
    System.out.println(Arrays.toString(dp));
    return dp[n];
}
```
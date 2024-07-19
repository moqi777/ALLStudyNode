class Student{  //Student是类的名字，自定义类型的名字
    //constructor   是构造方法(自动调用的一个方法)
    constructor(sno,name,age){//类似于java的有参构造
        //js自动定义一个变量存储起来，无需像java一样先定义变量
        this.sno = sno;
        this.name = name;
        this.age = age;
    }
    //自动义普通函数
    print(){
        return `sno:${this.sno},name:${this.name},age:${this.age}`;
    }
}
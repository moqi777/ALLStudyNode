class Pet{
    //构造方法
    constructor(id,name,price){
        this.id=id;
        this.name=name;
        this.price=price
    }
    print(){
        return `宠物id:${this.id},宠物名字：${this.name},宠物价格：${this.price}`;
    }
}

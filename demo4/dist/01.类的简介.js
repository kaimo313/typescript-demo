"use strict";
// 使用class关键字来定义一个类
class Person {
    constructor() {
        // 定义实例属性
        this.name = "kaimo";
        // 只读属性 readonly
        this.sex = "男";
    }
    // 定义方法
    sayHello() {
        console.log("hello kaimo");
    }
}
// 在属性前使用static关键字可以定义类属性（静态属性）
Person.age = 313;
const per = new Person();
console.log(per);
console.log(per.name);
console.log(Person.age);
console.log(per.sayHello());

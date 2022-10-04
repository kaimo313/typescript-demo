"use strict";
class Dog {
    // 构造函数会在对象创建时调用
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        // 在方法中可以通过this来表示当前调用方法的对象
        console.log("bark--->", this);
    }
}
const dog = new Dog("小黑", 3);
const dog2 = new Dog("小白", 2);
console.log("dog--->", dog);
console.log("dog2--->", dog2);
dog.bark();
dog2.bark();

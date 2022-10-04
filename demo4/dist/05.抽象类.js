"use strict";
(function () {
    // 父类
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    // 使Dog类继承Animal类
    class Dog extends Animal {
        sayHello() {
            console.log(`${this.name}汪汪汪`);
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log(`${this.name}喵喵`);
        }
    }
    const dog = new Dog("小黄");
    console.log(dog);
    dog.sayHello();
    // console.log(new Animal); // 无法创建抽象类的实例。
})();

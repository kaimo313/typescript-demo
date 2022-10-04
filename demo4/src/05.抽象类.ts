(function() {
    // 父类
    abstract class Animal {
        name: string;
    
        constructor(name: string) {
            this.name = name;
        }
        // 定义一个抽象方法
        abstract sayHello():void;
    }
    // 使Dog类继承Animal类
    class Dog extends Animal{
        sayHello() {
            console.log(`${this.name}汪汪汪`);
        }
    }
    class Cat extends Animal{ // 非抽象类“Cat”不会实现继承自“Animal”类的抽象成员“sayHello”。
        sayHello() {
            console.log(`${this.name}喵喵`);
        }
    }

    const dog = new Dog("小黄");
    console.log(dog);
    dog.sayHello();

    // console.log(new Animal); // 无法创建抽象类的实例。
})()
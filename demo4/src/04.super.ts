(function() {
    // 父类
    class Animal {
        name: string;
    
        constructor(name: string) {
            this.name = name;
        }
    
        sayHello() {
            console.log("动物叫~");
        }
    }
    // 使Dog类继承Animal类
    class Dog extends Animal{
        age: number;
        constructor(name: string, age: number) {
            super(name); // 调用父类的构造函数
            this.age = age;
        }
        sayHello() {
            console.log(`${this.name}汪汪汪`);
        }
    }

    const dog = new Dog("小黄", 2);
    console.log(dog);
    dog.sayHello();
})()
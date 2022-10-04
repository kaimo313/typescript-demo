(function() {
    // 父类
    class Animal {
        name: string;
        age: number
    
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
    
        sayHello() {
            console.log("动物叫~");
        }
    }
    // 使Dog类继承Animal类
    class Dog extends Animal{
        run() {
            console.log(`${this.name}在跑`);
        }
        sayHello() {
            console.log(`${this.name}汪汪汪`);
        }
    }
    // 使Cat类继承Animal类
    class Cat extends Animal{

    }

    const dog = new Dog("小黄", 2);
    const cat = new Cat("小橘", 1);
    console.log(dog);
    dog.sayHello();
    dog.run();
    console.log(cat);
    cat.sayHello();
})()
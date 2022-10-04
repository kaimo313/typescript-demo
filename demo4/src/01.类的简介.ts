// 使用class关键字来定义一个类
class Person {
    // 定义实例属性
    name: string = "kaimo";
    // 在属性前使用static关键字可以定义类属性（静态属性）
    static age: number = 313;
    // 只读属性 readonly
    readonly sex: string = "男";
    // 定义方法
    sayHello() {
        console.log("hello kaimo");
    }
}

const per = new Person();

console.log(per);
console.log(per.name);
console.log(Person.age);
console.log(per.sayHello());

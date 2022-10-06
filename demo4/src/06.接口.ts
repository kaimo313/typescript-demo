(function() {
    interface myInterface {
        name: string,
        age: number
    }

    interface myInterface {
        gender: string
    }

    const obj:myInterface = {
        name: "kaimo",
        age: 313,
        gender: "男"
    }

    interface myInterface2 {
        name: string;
        sayHello():void;
    }

    class MyClass implements myInterface2{
        name: string;
        constructor(name: string) {
            this.name = name;
        }
        sayHello() {
            console.log("kaimo");
        }
    }
})()
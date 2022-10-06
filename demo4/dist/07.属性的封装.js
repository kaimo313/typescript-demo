"use strict";
(function () {
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        // getName() {
        //     return this.name;
        // }
        // setName(value:string) {
        //     this.name = value;
        // }
        // getAge() {
        //     return this.age;
        // }
        // setAge(value:number) {
        //     if(value >= 0) {
        //         this.age = value;
        //     }
        // }
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person("kaimo", 18);
    console.log(per);
    // per.setName("kaimo313");
    // per.setAge(-313);
    per.name = "kaimo313";
    per.age = -313;
    console.log(per);
    // class A{
    //     private num: number;
    //     constructor(num: number) {
    //         this.num = num;
    //     }
    // }
    // class B extends A{
    //     test(){
    //         console. log(this.num);
    //     }
    // }
    // class A{
    //     protected num: number;
    //     constructor(num: number) {
    //         this.num = num;
    //     }
    // }
    // class B extends A{
    //     test(){
    //         console. log(this.num);
    //     }
    // }
    // const b = new B(123) ;
    // b.num = 33;
    // class C{
    //     num: number;
    //     age:number;
    //     constructor(num: number, age:number) {
    //         this.num = num;
    //         this.age = age;
    //     }
    // }
    class C {
        constructor(num, age) {
            this.num = num;
            this.age = age;
        }
    }
})();

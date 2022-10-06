"use strict";
function fn(a) {
    return a;
}
let res = fn(313);
let res2 = fn("kaimo313");
function fn2(a, b) {
    console.log(b);
    return a;
}
let res3 = fn2(313, "kaimo313");
function fn3(a) {
    return a.name;
}
fn3({ name: "kaimo313" });
class MyClass {
    constructor(name) {
        this.name = name;
    }
}
const mc = new MyClass("kaimo");

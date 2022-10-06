function fn<T>(a:T):T {
    return a;
}

let res = fn(313);

let res2 = fn<string>("kaimo313");


function fn2<T, K>(a:T, b:K):T {
    console.log(b);
    return a;
}

let res3 = fn2<number, string>(313, "kaimo313");

interface inter {
    name: string
}

function fn3<T extends inter>(a: T):string {
    return a.name;
}

fn3({name: "kaimo313"})

class MyClass<T>{
    name: T;
    constructor(name: T) {
        this.name = name;
    }
}
const mc = new MyClass<string>("kaimo");
    
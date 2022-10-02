// // 可以直接使用 字面量 进行类型声明
// let a: 10;
// a = 10;
// a = 11; // 不能将类型“11”分配给类型“10”。
// // 可以使用 | 来连接多个类型(联合类型)
// let b: "male" | "female";
// b = "male";
// b = "female";
// b = "kaimo"; // 不能将类型“"kaimo"”分配给类型“"male" | "female"”。
// let c: boolean| string;
// c = true;
// c = 'hello';
// c = 666; // 不能将类型“666”分配给类型“string | boolean”。
// // any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// // 使用TS时， 不建议使用any类型
// let d: any;
// // let d; 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any (隐式的any)
// d = 10;
// d = 'hello';
// d = true;
// // unknown表示未知类型的值
// let d: any;
// let e: unknown;
// e = 10;
// e = "hello";
// e = true;
// let s:string; 
// // d的类型是any,它可以赋值给任意变量
// s = d;
// e = 'hello';
// // unknown类型的变量， 不能直接赋值给其他变量
// s = e;
// // 可以先类型判断在赋值
// if(typeof e === "string"){
//     s = e;
// }
// // 类型断言，可以用来告诉解析器变量的实际类型
// /**
//  * 语法:
//  *  变量as类型
//  *  <类型>变量
// */
// s = e as string;
// s = <string>e;
// // void用来表示空，以函数为例，就表示没有返回值的函数
// function fn(): void{
//     // return;
//     // return null;
//     // return undefined;
//     return ""; // 不能将类型“string”分配给类型“void”。
// }
// // never 表示永远不会返刊结果
// function fn2(): never{
//     // return; // 不能将类型“undefined”分配给类型“never”。
//     // return null; // 不能将类型“null”分配给类型“never”。
//     // return undefined; // 不能将类型“undefined”分配给类型“never”。
//     throw new Error(' 报错了! ');
// }
// // object表示一个js对象
// let a: object;
// a = {};
// a = function () {
// };
// // {} 用来指定对象中可以包含哪些属性
// //      语法: {属性名:属性值,属性名:属性做}
// //      在属性名后边加上?，表示属性是可选的
// let b: {name: string, age?: number};
// b = { 
//     name: 'kaimo',
//     age: 313
// };
// // [propName: string]: any表示任意类型的属性
// let c: {name: string, [propName: string]: any};
// c = {
//     name: 'kaimo',
//     age: 313,
//     gender: '男'
// };
// // 设置函数结构的类型声明
// // 语法: (形参:类型，形参:类型...) =>返回值
// let d: (a: number , b: number) => number;
// d = function (n1: number, n2: number): number{
//     return n1 + n2;
// }
// // string[] 表示字符串数组
// let e: string[];
// e = ['a', 'b', 'c'];
// // number[] 表示数值数值
// let f: number[];
// let g: Array<number>;
// g = [1,2,3];
// // 元组，元组就是固定长度的数组
// // 语法: [类型，类型，类型...]
// let h: [string, number];
// h = [ 'hello', 123] ;
// var Gender;
// (function (Gender) {
//     Gender[Gender["Male"] = 0] = "Male";
//     Gender[Gender["Female"] = 1] = "Female";
// })(Gender || (Gender = {}));
// var i;
// i = {
//     name: 'kaimo',
//     gender: Gender.Male
// };
// console.log(i.gender === Gender.Male);

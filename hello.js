"use strict";
// // console.log("hello");
// // const sum = (a: number, b: number): number => {
// //   return a + b;
// // };
// // console.log(sum(4, 6));
// //object
// let o: { a: string; b?: string; [propName: string]: any };
// o = { a: "hello", b: "Bob", c: "dfd" };
// //function
// let f: (a: number, b: number) => number;
// f = function (n1, n2): number {
//   return n1 + n2;
// };
// //array
// let a: Array<number>;
// a = [2, 3];
// let e: string[]; // let e:Array<string>
// e = ["2", "2"];
// let h: [string, string]; //元组，固定长度的数组
// h = ["1", "2"];
// //enum 枚举
// enum Gender {
//   Male,
//   Female,
// }
// let person: { name: string; gender: Gender };
// person = { name: "Emily", gender: Gender.Female };
// //&
// let d: { name: string } & { age: number };
// d = { name: "jenny", age: 5 };
// //类型的别名
// type myType = 1 | 2 | 3 | 4 | 5;
// let g: myType;
// // g = 4; //yes
// // g = 0; //no
// console.log(d);
let a;
a = false;
a = 7;
a = "hello";
let b;
//第一种
if (typeof a === "string") {
    b = a;
}
// 断言
b = a;
//断言
b = a;
console.log(b);

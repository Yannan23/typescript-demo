// console.log("hello");

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(sum(4, 6));

//object
let o: { a: string; b?: string; [propName: string]: any };
o = { a: "hello", b: "Bob", c: "dfd" };

//function
let f: (a: number, b: number) => number;
f = function (n1, n2): number {
  return n1 + n2;
};

//array
let a: Array<number>;
a = [2, 3];

let e: string[]; // let e:Array<string>
e = ["2", "2"];

let h: [string, string]; //元组，固定长度的数组
h = ["1", "2"];

//enum 枚举

enum Gender {
  Male,
  Female,
}

let person: { name: string; gender: Gender };
person = { name: "Emily", gender: Gender.Female };

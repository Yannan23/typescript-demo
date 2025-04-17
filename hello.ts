// console.log("hello");

// const sum = (a: number, b: number): number => {
//   return a + b;
// };

// console.log(sum(4, 6));

//object
let o: { a: string; b?: string; [propName: string]: any };
o = { a: "hello", b: "Bob", c: "dfd" };

//array
let a: Array<number>;
a = [2, 3];

//function
let f: (a: number, b: number) => number;
f = function (n1, n2): number {
  return n1 + n2;
};

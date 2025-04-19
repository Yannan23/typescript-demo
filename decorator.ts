// function AdultToString(target: Function) {
//   target.prototype.toString = function () {
//     return JSON.stringify(this);
//   };
//   //   Object.seal(target.prototype);
// }

// @AdultToString
// class Adult {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const a1 = new Adult("adam", 18);
// // console.log(a1.toString());

// interface Adult {
//   x: number;
// }
// Adult.prototype.x = 99;

// //
// // type Constructor = new (...args: any[]) => {};

// function test(fn: Constructor) {}
// // const p2 = () => {};
// class p2 {}
// test(p2);

// //替换被装饰的类

// type Constructor = new (...args: any[]) => {};
// interface User {
//   getTime(): void;
// }

// function LogTime<T extends Constructor>(target: T) {
//   return class extends target {
//     createdAt: Date;
//     constructor(...args: any[]) {
//       super(...args);
//       this.createdAt = new Date();
//     }
//     getTime() {
//       return `User was created at ${this.createdAt}`;
//     }
//   };
// }

// // @LogTime

// // class User {
// //   constructor(public name: string) {}
// // }

// // const user1 = new User("emily");
// // console.log(user1.getTime());

// //装饰器工厂，装饰器工厂返回一个装饰器

// interface User {
//   introduce(): void;
// }

// function LogInfo(n: number) {
//   return function LogInfo(target: Function) {
//     target.prototype.introduce = function () {
//       for (let i = 0; i < n; i++) {
//         // console.log(`my name is ${this.name}`);
//       }
//     };
//   };
// }

// // @LogInfo(5)
// class User {
//   constructor(public name: string) {}
// }

// const user1 = new User("emily");

// // user1.introduce();

// //属性装饰器

// function State(target: object, propertyKey: string) {
//   let key = `_${propertyKey}`;
//   Object.defineProperty(target, propertyKey, {
//     get() {
//       return this[key];
//     },
//     set(val) {
//       this[key] = val;
//     },
//   });
// }

// class Student {
//   name: string;
//   @State age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

//method decorator
function Logger(
  target: object,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Function ${propertyKey} is running`);
    const result = original.call(this, ...args);
    console.log(`Function ${propertyKey} is stopped`);
  };
}

class Child {
  constructor(public name: string) {}
  @Logger speak() {
    console.log(`I'm ${this.name}`);
  }
}
const p3 = new Child("jenny");
p3.speak();

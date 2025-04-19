function AdultToString(target: Function) {
  target.prototype.toString = function () {
    return JSON.stringify(this);
  };
  //   Object.seal(target.prototype);
}

@AdultToString
class Adult {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const a1 = new Adult("adam", 18);
console.log(a1.toString());

interface Adult {
  x: number;
}
Adult.prototype.x = 99;

//
// type Constructor = new (...args: any[]) => {};

function test(fn: Constructor) {}
// const p2 = () => {};
class p2 {}
test(p2);

//替换被装饰的类

type Constructor = new (...args: any[]) => {};
interface User {
  getTime(): void;
}

function LogTime<T extends Constructor>(target: T) {
  return class extends target {
    createdAt: Date;
    constructor(...args: any[]) {
      super(...args);
      this.createdAt = new Date();
    }
    getTime() {
      return `User was created at ${this.createdAt}`;
    }
  };
}

@LogTime
class User {
  constructor(public name: string) {}
}

const user1 = new User("emily");
console.log(user1.getTime());

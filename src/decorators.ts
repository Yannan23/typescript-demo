function customString(target: Function) {
  target.prototype.toString = function () {
    return JSON.stringify(this);
  };
}

@customString
class Person {
  constructor(public name: string, public age: number) {}
}

const p1 = new Person("bob", 5);
console.log(p1.toString());

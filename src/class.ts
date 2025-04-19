// class Person {
//   name: string;
//   age: number;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`My name is ${this.name}, I'm ${this.age}`);
//   }
// }
// class Person {
//   constructor(public name: string, public age: number) {}
//   speak() {
//     console.log(`My name is ${this.name}, I'm ${this.age}`);
//   }
// }

// class Student extends Person {
//   grade: string;
//   constructor(name: string, age: number, grade: string) {
//     super(name, age);
//     this.grade = grade;
//   }
//   override speak() {
//     console.log(`I'm a student. My name is ${this.name}, I'm ${this.age}`);
//   }
// }

abstract class Package {
  constructor(public weight: number) {}
  abstract caculate(): number;
  printPackage() {
    console.log(
      `This package weight is ${this.weight}. The cost is ${this.caculate()}`
    );
  }
}

class StandardPackage extends Package {
  constructor(weight: number, public unitPrice: number) {
    super(weight);
  }
  caculate(): number {
    return this.weight * this.unitPrice;
  }
}

const package1 = new StandardPackage(10, 5);
package1.printPackage();

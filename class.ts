class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`My name is ${this.name}, I'm ${this.age}`);
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }
  override speak() {
    console.log(`I'm a student. My name is ${this.name}, I'm ${this.age}`);
  }
}

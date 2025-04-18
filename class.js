"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`My name is ${this.name}, I'm ${this.age}`);
    }
}
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    speak() {
        console.log(`I'm a student. My name is ${this.name}, I'm ${this.age}`);
    }
}

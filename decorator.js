"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function AdultToString(target) {
    target.prototype.toString = function () {
        return JSON.stringify(this);
    };
    //   Object.seal(target.prototype);
}
let Adult = class Adult {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
};
Adult = __decorate([
    AdultToString
], Adult);
const a1 = new Adult("adam", 18);
Adult.prototype.x = 99;
//
// type Constructor = new (...args: any[]) => {};
function test(fn) { }
// const p2 = () => {};
class p2 {
}
test(p2);
function LogTime(target) {
    return class extends target {
        constructor(...args) {
            super(...args);
            this.createdAt = new Date();
        }
        getTime() {
            return `User was created at ${this.createdAt}`;
        }
    };
}
function LogInfo(n) {
    return function LogInfo(target) {
        target.prototype.introduce = function () {
            for (let i = 0; i < n; i++) {
                console.log(`my name is ${this.name}`);
            }
        };
    };
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    LogInfo(5)
], User);
const user1 = new User("emily");
user1.introduce();

"use strict";
//generics function
function logData(data1, data2) {
    return Date.now() % 2 ? data1 : data2;
}
console.log(logData("haha", 1));
console.log(logData(199, true));
let bob = {
    name: "bob",
    age: 2,
    info: {
        title: "mr",
        position: "dev",
    },
};
//generic class
class Dress {
    constructor(color, size, detail) {
        this.color = color;
        this.size = size;
        this.detail = detail;
    }
}
const skirt = new Dress("red", 4, false);

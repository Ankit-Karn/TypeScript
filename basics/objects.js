"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Ankit",
    email: "ankit@gmail.com",
    isActive: true
};
//not a correct way to create an object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name:"Toshi", isPaid: false}); to make this correct 
var newUser = { name: "Toshi", isPaid: true, email: "toshi@gmail.com" };
console.log(createUser(newUser));
// correct way
function createCourse() {
    return { name: "react.js", price: 399 };
}
console.log(createCourse());

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
var res = addTwo(5);
console.log(res);
function user(val) {
    return val.toUpperCase();
}
var sol = user("Ankit");
console.log(sol);
// arrow function and setting default value
var employee = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
var result = employee("Ankit", "ankit@abc.com");
// another example
var Value = function (value) {
    return "hello";
};
var ans = Value(5);
console.log(ans);
//therefore instead of the above code we write this  -->
var x = function (y) {
    return y + 2;
};
console.log(x(5));

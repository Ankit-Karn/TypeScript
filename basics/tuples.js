"use strict";
// Tuples - TypeScript has special analysis around arrays which contain multiple types, and where the order in which they are indexed is important.
Object.defineProperty(exports, "__esModule", { value: true });
var user;
// user = ["toshi", 120] this is not allowed as tuples strictly checks for length and order of indexing
user = [12, "toshi"];
// but tuples are controversial
// if we try to add extra number we will get error for example - 
// user = [12, "Ankit", 41]
// but if we use Array.push() it will work fine
user.push(41);
console.log(user);

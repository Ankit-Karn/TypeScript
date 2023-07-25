"use strict";
// class User {
//     email: string
//     name: string
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Chaibasa";
        this._courseCount = 1;
    }
    //getter
    get getGmailId() {
        return `gmail ${this.email}`;
    }
    //getter and setter
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
const Ankit = new User("ankit@gmail.com", "Ankit", "123");

// class User {
//     email: string
//     name: string
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
   readonly city: string = "Chaibasa"

    private _courseCount = 1

   constructor(
    public email: string,
    public name: string,
    private userId: string
   ){} 

   //getter
   get getGmailId(): string{
    return `gmail ${this.email}`
   }

   //getter and setter
   get courseCount(): number{
    return this._courseCount
   }

   set courseCount(courseNum) {
    if(courseNum <= 1){
        throw new Error("Course count should be more than 1")
    }
    this._courseCount = courseNum;
   }
}

const Ankit = new User("ankit@gmail.com", "Ankit", "123");

export {}
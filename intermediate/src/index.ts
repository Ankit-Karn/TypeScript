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

    protected _courseCount = 1 //wherever a variable is declared as protected it can be accessed in the class as well as subclass.

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

class subUser extends User{ //private properties of user will not be accessible to subUser.
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4 //if the _courseCount in User class is private we will get error here but if we make it protected it will work fine.
    }
}

const Ankit = new User("ankit@gmail.com", "Ankit", "123");

export {}
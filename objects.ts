const user = {
    name: "Ankit",
    email: "ankit@gmail.com",
    isActive: true
}
//not a correct way to create an object but typescript doesn't show any error.
function createUser({name:string, isPaid:boolean}){}
// createUser({name:"Toshi", isPaid: false});
let newUser = {name: "Toshi", isPaid: true, email: "toshi@gmail.com"} // we can add email like this
console.log(createUser(newUser))

// correct way
function createCourse():{name: string, price: number}{
    return {name: "react.js", price: 399}
}
console.log(createCourse())
export{}
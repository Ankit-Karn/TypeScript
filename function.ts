function addTwo(num: number){
    return num+2
}

var res = addTwo(5)
console.log(res)

function user(val: string){
    return val.toUpperCase()
}

var sol = user("Ankit")
console.log(sol)

// arrow function and setting default value

var employee = (name: string, email: string, isPaid: boolean = false) => {}
var result = employee("Ankit", "ankit@abc.com");
export{}

// another example

var Value = (value: number)=>{ //here typescript will return hello and won't show error because a function can return anything..
    return "hello"
}
var ans = Value(5);
console.log(ans);

//therefore instead of the above code we write this  -->
var x = (y: number): number=>{ //this code will strictly return number
    return y+2;
}
console.log(x(5))
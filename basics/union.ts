// Union type - Union type is a variable which can store any type (example - number, String)

let score: number | string = 33 // here score could be a number or a String

score = 55
console.log(score)

score = "12";
console.log(score)

type user = {
    name: string,
    id: number
}
type admin ={
    username: string,
    id: number
}

let Ankit: user | admin = {name: "Ankit", id: 16};
Ankit = {username: "ankit_karn", id:16};
console.log(Ankit)

// function

getDbId(3);
getDbId("AAbbCc");
function getDbId(id: number|string){
    // id.toLowerCase(); // this will show an error "Property 'toLowerCase' does not exist on type 'string | number'."
    if(typeof id === "string"){
        id.toLowerCase();
    }
}

// Array
const data1: number[] = [1,2,3];
const data2: string[] = ["1","2","3"];
// const data3: string | number [] = [1,2,3,"40"] -> this is not a correct way to write array of multiple type
// const data4: string[] | number[] = ["1","2", 3] -> in this was we can have an array of number or string we cannot have both
const data5 : (string | number)[] = [1,2,3,"4"] //this is the correct way to write an array of multiple types
console.log(data5);

export {}
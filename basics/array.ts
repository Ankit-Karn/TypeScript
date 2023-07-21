// const arr = []
// arr.push(2); // This is an error in typescript because when we define array like this it's default type is never.
// console.log(arr);

const superhero: string[] = [];
superhero.push("Spiderman")

const superpower: number[] = [];
superpower.push(100);


// Another way of defining array
const hero: Array<number> = [];
hero.push(11);

//making an array of mixed type
type User ={
    name: string
    age: number
}

const allUser: User[] = [];
allUser.push({name: "Ankit", age: 24});
console.log(allUser);

//multi dimensional array
const MLModel: number[][] = [
    [255, 255, 255],
    []
]
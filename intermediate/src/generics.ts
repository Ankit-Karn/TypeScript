// Generics - In TypeScript, generics allow you to create reusable and flexible components that can work with various data types while maintaining strong type safety. They enable you to define functions, classes, and interfaces that can work with different types without sacrificing type checking.
// Generics are denoted by angle brackets < > 

//ways to define generics
const score: Array<number> = [];
const name: Array<string> = [];

//function
function identityOne(val: boolean | number): boolean|number {
    return val;
} //this will take val as boolean or number and return val

function indentityTwo(val: any): any {
    return val;
} //this will take any value and return any value for example it can take number as input as return string as output

function identityThree <Type>(val: Type): Type{
    return val;
} //this will take an input and whatever will be the typeof input it will return the value of similar type.

function indentityFour<T>(val: T): T{
    return val;
} //works same as identityThree

//If we have to use our own datatype then,
interface Bottle {
    brand: string,
    type: number
}
// indentityFour<Bottle>({})

// in terms of array
function getProducts<T>(products: T[]): T{
    let i=0
    return products[i]
}
// arrow function 
const getProductDetails = <T>(products: T[]): T=> {
    let i=0;
    return products[i]
} 

// using type parameter in generic constraints
interface Database{
    connection: string,
    username: string,
    password: string
}

function anotherFunc <T, U extends Database>(valueOne: T, valueTwo: U): object{
    return {
        valueOne,
        valueTwo
    }
}

// anotherFunc(3,{connection:"yes", username: "ankit", password: "ankit10"});

// using class type in generics

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class sellable<T> {
    public cart: T[] = []

    addToCart(products: T){
        this.cart.push(products)
    }
}

export{}
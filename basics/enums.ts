// Enums - Enums stands for Enumerations. Enums are a new data type supported in TypeScript. It is used to define the set of named constants, i.e., a collection of related values. TypeScript supports both numeric and string-based enums.

 const enum flightSeat {
    Aisle = "pahila seat",
    Middle = "bich ka seat",
    Window = "asman dekh paoge"
}

let mySeat = flightSeat.Window;
console.log(mySeat);

export {}
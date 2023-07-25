// Interface - In TypeScript, an "interface" is a way to define the structure of an object. It allows you to specify what properties an object should have, along with their types. It acts as a contract that enforces that objects of a particular type must adhere to the defined structure.

interface user {
    readonly dbId: number
    emailId: string
    userId: number
    googleId: number
    startTrail(): string
    getCoupon(couponName: string, discount: number): number
}

let Ankit: user = {
    dbId: 16, emailId: "a@gmail.com", userId: 10, googleId: 1147,
    startTrail: () =>{
        return "trial started"
    },
    getCoupon: (name: "ankit16", off: 10) =>{
        return 10;
    }
}

export {}
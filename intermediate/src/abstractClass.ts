// Abstract class - an abstract class is a class that cannot be directly instantiated. It is intended to serve as a blueprint for other classes, defining a common set of properties and methods that its derived classes should implement. Abstract classes are designed to be inherited from, allowing developers to create subclasses that extend and specialize the behavior of the abstract class.

abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getSepia(): void;
    getReelTime(): number{
        return 8;
    }
}

class Instagram extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        
    ){
        super(cameraMode, filter)
    }
    getSepia(): void {
        console.log("sepia")
    }
}

// let Ankit = new takePhoto("test", "Test"); //-> We cannot create an instance of an abstract class.

export {}
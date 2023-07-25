interface takePhoto {
    cameraMode: string
    filter: string
    burst: number
}

interface story{
    createStory(): void
}

class Insta implements takePhoto, story{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public shutterSpeed: number
    ){}

    createStory(): void{
        console.log("story created");
    }
}
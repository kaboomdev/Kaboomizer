export class Recipe {
    public name : string;
    public descr : string;
    public imgPath : string;
    constructor(name : string, descr : string, imgPath : string) {
        this.name = name;
        this.descr = descr;
        this.imgPath = imgPath;
    }
}
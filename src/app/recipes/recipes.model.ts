import { Guid } from "guid-typescript";

export class Recipe {
    public id: number;
    public name : string;
    public descr : string;
    public imgPath : string;
    constructor(id: number, name : string, descr : string, imgPath : string) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.imgPath = imgPath;
    }
}
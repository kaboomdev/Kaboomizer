import { Guid } from "guid-typescript";
import { Ingredient } from './ingredient.model';

export class Recipe {
    public id: number;
    public name : string;
    public descr : string;
    public imgPath : string;
    public ingredients : Ingredient[];
    constructor(id: number, name : string, descr : string, imgPath : string, ingr : Ingredient[]) {
        this.id = id;
        this.name = name;
        this.descr = descr;
        this.imgPath = imgPath;
        this.ingredients = ingr;
    }
}
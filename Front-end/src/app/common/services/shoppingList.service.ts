import { EventEmitter, Output, Injectable } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
;
@Injectable()
export class ShoppingListService {
    @Output() ingredientAdded = new EventEmitter;
    
    
    constructor(private http : HttpClient){
        
    }
    private ingredients : Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
        new Ingredient('Cucumber', 20)
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }
    addIngredients (){
        return this.http.post("http://localhost:3000/addIngredients", this.ingredients, {
            responseType: "text"
        }).subscribe(res => {
            console.log(res);
        });
    }
    addIngredient(ingredient : Ingredient) {
        this.ingredients.push(ingredient)
        this.ingredientAdded.emit(this.getIngredients())
    }
}
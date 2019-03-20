import { Output, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../models/recipes.model';
import * as _ from 'lodash';
import { Ingredient } from '../models/ingredient.model';
import { ShoppingListService } from './shoppingList.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throws } from 'assert';

@Injectable()
export class RecipeService {
  
    @Output() recipeSelected = new EventEmitter<any>();
    
   
    
    private recipes: Recipe[] = [
        new Recipe(1,'French Fries', 'Super tasty meal made of crispy potatoes.', "https://thumbor.thedailymeal.com/79UGKtZp0JMHWfo4hEIPSogGjKo=/840x565/filters:focal(585x390:586x391)/https://www.thedailymeal.com/sites/default/files/recipe/2017/shutterstock_510881971.jpg", [new Ingredient("Potatoes", 3), new Ingredient("Oil", 1)]),
        new Recipe(0,'Shish Kabab', 'Delicious food that the eastern people cherish.', "https://andrewzimmern.com/wp-content/uploads/2013/05/Shish-Kebabs.jpg", [new Ingredient("Meat", 2), new Ingredient("Coal", 1)]),
    ];
    
    
    getRecipeById(id : any){
        let tempObj;
        _.forEach(this.recipes,function(value, key){
           if (value.id == id) {
                tempObj = value;
           }
        })
        return tempObj;
    }
    getRecipes () {
        return this.recipes.slice();
    }
    addRecipes (){
        return this.http.post("http://localhost:3000/addRecipes", this.recipes).subscribe(res => {
            console.log(res);
        });
    }
    addIngredientsToShoppingList(ings : Ingredient[]){
        for (let i = 0; i < ings.length; i++) {
            const element = ings[i];
            this.slService.addIngredient(element);
        }
    }
    constructor(
        private slService : ShoppingListService,
        private http: HttpClient
    ){
        
        
    }
    
    
    
}
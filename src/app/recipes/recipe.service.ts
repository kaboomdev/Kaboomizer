import { Recipe } from './recipes.model';
import { Guid } from 'guid-typescript';
import * as _ from 'lodash';

export class RecipeService {
    recipes: Recipe[] = [
        new Recipe(1,'French Fries', 'Super tasty meal made of crispy potatoes.', "https://thumbor.thedailymeal.com/79UGKtZp0JMHWfo4hEIPSogGjKo=/840x565/filters:focal(585x390:586x391)/https://www.thedailymeal.com/sites/default/files/recipe/2017/shutterstock_510881971.jpg"),
        new Recipe(0,'Shish Kabab', 'Delicious food that the eastern people cherish.', "https://andrewzimmern.com/wp-content/uploads/2013/05/Shish-Kebabs.jpg"),
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
    
}
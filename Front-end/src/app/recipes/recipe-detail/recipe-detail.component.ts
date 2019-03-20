import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../common/models/recipes.model';
import { Ingredient } from 'src/app/common/models/ingredient.model';
import { RecipeService } from 'src/app/common/services/recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  
  @Input() displayedRecipe : Recipe;
  constructor(
    private recipeService : RecipeService
  ) { }

  ngOnInit() {
  }
  addToShoppingList(data : Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(data);
  }
}

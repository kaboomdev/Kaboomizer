import { Component, OnInit} from '@angular/core';
import { Recipe } from '../../common/models/recipes.model';
import { RecipeService } from 'src/app/common/services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  
  recipeId = '';
  

  constructor(
    private recipeService : RecipeService
  ) { }
  
  recipes = this.recipeService.getRecipes();
  ngOnInit() { 
  }
  


}

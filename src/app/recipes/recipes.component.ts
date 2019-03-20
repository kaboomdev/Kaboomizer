import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RecipeService } from '../common/services/recipe.service';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {

  receivedRecipeId : String;
  
  recipe : any;
  
  constructor(
    private recipeService : RecipeService,
    private titleService: Title ,
  ) { 
   
  }

  ngOnInit() {
    this.titleService.setTitle( 'Kaboomizer - Recipes' );
    this.recipeService.recipeSelected.subscribe((res) => {
      this.getRecipe(res);
    } )
    this.recipeService.addRecipes();
  }
  
  
  getRecipe(id : String){
    this.recipe = this.recipeService.getRecipeById(id);
  }
  
}

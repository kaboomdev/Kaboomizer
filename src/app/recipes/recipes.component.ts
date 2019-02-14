import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';
import { Guid } from 'guid-typescript';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  receivedRecipeId : String;
  
  recipe : any;
  
  constructor(
    private recipeService : RecipeService,
    private titleService: Title ,
  ) { }

  ngOnInit() {
    this.titleService.setTitle( 'Kaboomizer - Recipes' );
  }
  
  acceptRecipe($event){
    this.receivedRecipeId = $event;
    this.getRecipe(this.receivedRecipeId);
  }
  getRecipe(id : String){
    this.recipe = this.recipeService.getRecipeById(id);
  }
  
}

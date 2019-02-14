import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
  providers: [ RecipeService ]
})
export class RecipeListComponent implements OnInit {
  
  recipeId = '';
  
  @Output() recipeSelected = new EventEmitter();

  constructor(
    private recipeService : RecipeService
  ) { }
  
  recipes = this.recipeService.recipes;
  ngOnInit() {
    
    
    
  }
  

  
  sendRecipe(data : any){
    this.recipeId = data;
    this.recipeSelected.emit(this.recipeId)
  }

}

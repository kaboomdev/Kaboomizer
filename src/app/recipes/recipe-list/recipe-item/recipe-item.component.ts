import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../../common/models/recipes.model';
import * as $ from 'jquery';
import { RecipeService } from 'src/app/common/services/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor(
    private recipeService : RecipeService,
  ) { }
  
  @Input() recipe : Recipe;

  
  ngOnInit() {
    $('.recipe-card').on('click', function(){
      $('.recipe-card').removeClass('active');
      $(this).addClass('active');
    })
  }

  onSelect(){
    this.recipeService.recipeSelected.emit(this.recipe.id);
  }
  

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes.model';
import * as $ from 'jquery';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  @Input() recipe : Recipe;
  
  @Output() selectedRecipe = new EventEmitter();
  
  ngOnInit() {
    $('.recipe-card').on('click', function(){
      $('.recipe-card').removeClass('active');
      $(this).addClass('active');
    })
  }

  onSelect($event){
    $event.target.classList.add('active');
    this.selectedRecipe.emit(this.recipe.id);
  }
}

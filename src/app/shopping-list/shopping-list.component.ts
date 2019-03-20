import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/models/ingredient.model';
import { Title } from '@angular/platform-browser';
import { ShoppingListService } from '../common/services/shoppingList.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
 
  ingredients : Ingredient[]  = [];
  constructor(
    private titleService: Title,
    private slService : ShoppingListService,
  ) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.titleService.setTitle( 'Kaboomizer - Shopping List' );
    this.slService.ingredientAdded.subscribe((res)=> {
      this.ingredients = res;
    })
    this.slService.addIngredients();
  }

  
  addIngredient(data : any){
    
  }
}

import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../common/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
    new Ingredient('Cucumber', 20)
  ];
  constructor() { }

  ngOnInit() {
  }

}

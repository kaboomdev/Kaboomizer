import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('French Fries', 'A super tasty meal made of crispy potatoes', "https://thumbor.thedailymeal.com/79UGKtZp0JMHWfo4hEIPSogGjKo=/840x565/filters:focal(585x390:586x391)/https://www.thedailymeal.com/sites/default/files/recipe/2017/shutterstock_510881971.jpg"),
    new Recipe('French Fries', 'A super tasty meal made of crispy potatoes', "https://thumbor.thedailymeal.com/79UGKtZp0JMHWfo4hEIPSogGjKo=/840x565/filters:focal(585x390:586x391)/https://www.thedailymeal.com/sites/default/files/recipe/2017/shutterstock_510881971.jpg"),
  ];
  
  constructor() { }

  ngOnInit() {
  }

}

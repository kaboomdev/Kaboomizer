import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../common/models/ingredient.model';
import { ShoppingListService } from 'src/app/common/services/shoppingList.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput : ElementRef;  
  @ViewChild('numberInput') numberInput : ElementRef;  
  
  
  constructor(
    private slService : ShoppingListService,
  ) { }

  
  ngOnInit() {
    
  }
  
  clearInput(){
    this.nameInput.nativeElement.value = "";
    this.numberInput.nativeElement.value = "";
  }
  

  addIngredient(){
    var name : string = this.nameInput.nativeElement.value;
    var number : number = this.numberInput.nativeElement.value;
    var ingredient = new Ingredient(name,number);
    this.slService.addIngredient(ingredient);
  }
  
  showForm(e) {
    $(e.target).fadeOut(250, function () {
      $('.shopping-form').fadeIn(250)
    });
  }
}

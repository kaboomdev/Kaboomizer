import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import * as $ from 'jquery';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../../common/ingredient.model';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput : ElementRef;  
  @ViewChild('numberInput') numberInput : ElementRef;  
  
  @Output() onAdd  = new EventEmitter;
  
  constructor() { }

  
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
    this.onAdd.emit(ingredient);
  }
  
  showForm(e) {
    $(e.target).fadeOut(250, function () {
      $('.shopping-form').fadeIn(250)
    });
  }
}

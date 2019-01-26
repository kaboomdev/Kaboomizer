import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInput : ElementRef;  
  @ViewChild('numberInput') numberInput : ElementRef;  
  
  constructor() { }

  ngOnInit() {
    
    console.log(this.nameInput) ;
  }
  
  clearInput(){
    let inputs = document.querySelectorAll('input');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
  }
  
  
  
  
  sendIngredient(){
    
  }
  
  showForm(e) {
    $(e.target).fadeOut(250, function () {
      $('.shopping-form').fadeIn(250)
    });
  }
}

import { Component, Output } from "@angular/core";  
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    
    @Output() selectedFeature = new EventEmitter();
    
    username = "Kaboomdev"
    
    onSelect(feature : string, $event){
       let links = document.querySelectorAll('.nav-link');
        
       for (let i = 0; i < links.length; i++) {
           links[i].classList.remove('active');
       }
       $event.target.classList.add('active');       
        this.selectedFeature.emit(feature);
    }
    
}
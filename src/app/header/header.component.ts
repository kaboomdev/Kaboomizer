import { Component, Output } from "@angular/core";  
import { EventEmitter } from 'events';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
    
    @Output() selectedFeature = new EventEmitter();
    
    onSelect(feature : string){
        this.selectedFeature.emit(feature);
    }
    
}
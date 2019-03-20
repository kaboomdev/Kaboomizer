import { Component } from '@angular/core';
import { slideInRightOnEnterAnimation, slideOutLeftOnLeaveAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation, bounceInRightAnimation } from 'angular-animations';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  loadedFeature : string = "recipe";
  onNavigate(data : string){
    this.loadedFeature = data;
  }
};
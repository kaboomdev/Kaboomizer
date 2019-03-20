import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  
  
  constructor(
    private elementRef : ElementRef,
  ) { }

  isOpen : boolean = false;
  @HostListener("click") toggleOpen(){ 
    this.isOpen = !this.isOpen; 
    if (this.isOpen) {
      this.elementRef.nativeElement.children[1].classList.add('show')
    } else {
      this.elementRef.nativeElement.children[1].classList.remove('show')
    }
  };

  
 
}

import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appInsertBorderDirective]'
})
export class InsertBorderDirective {
  @HostListener('click', ['$event'])
  toogleBorder(event: Event) {
    this.isBorder = !this.isBorder;
  }

  @HostBinding('style.border') 
  get border(): string {
    return this.isBorder ? '1px solid red' : '';
  }

  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.border = '1px solid red';
   }

  private isBorder = false;

}

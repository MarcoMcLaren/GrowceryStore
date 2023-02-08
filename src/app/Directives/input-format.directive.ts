import { ElementRef, Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[lowerCase]'
})
export class InputFormatDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input') lowerCase() {
    let value: string = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toLowerCase();
  }
}





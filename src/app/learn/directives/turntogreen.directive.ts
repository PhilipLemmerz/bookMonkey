import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[plTurntogreen]'
})
export class TurntogreenDirective {

  constructor() { }

  @HostBinding('class.highlight') active = false;

  @HostListener('mouseenter') hightlight() {
    this.active = true;
  }
  @HostListener('mouseleave') noHighlight() {
    this.active = false;
  }

}

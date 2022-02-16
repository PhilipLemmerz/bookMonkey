import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[plZoom]'
})
export class ZoomDirective {

  constructor() { }

  @HostBinding("class.medium") zoomed = false;

  @HostListener('mouseenter') zoomIn() {
    this.zoomed = true
  }
  @HostListener('mouseleave') zoomOut() {
    this.zoomed = false;
  }

}

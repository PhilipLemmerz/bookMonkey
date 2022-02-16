import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[plDelay]'  // !! Muss gleich mit dem @Input() Name sein
})
export class DelayDirective implements OnInit {

  @Input() plDelay: number;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.createEmbeddedView(this.templateRef);  // templateRef ist eine Referenz auf das Element auf dem die Directive sitzt.
    }, this.plDelay);
  }
}

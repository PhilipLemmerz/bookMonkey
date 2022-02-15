import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[plOurDirective]'
})
export class OurDirective implements OnInit {

  constructor(private el: ElementRef) { }

  @HostBinding() class = "active"                    // Bindet die Klasse active an das Host Element
  @Input('text') text: string;                      // Text von einem anderen Binding des HostElements in die Directive holen
  @HostListener('click') handleClick() {
    this.el.nativeElement.style.backgroundColor = "yellow";
    this.el.nativeElement.style.color = "blue";
  }


  ngOnInit(): void {
    console.log(this.text);
    setTimeout(() => {
      this.el.nativeElement.style.color = "green"
    }, 3000)
  }

}

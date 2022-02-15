import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'pl-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  viewState = false;


  constructor() { }

  ngOnInit(): void {

  }

}

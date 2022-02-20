import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pl-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() book :any;

  ngOnInit(): void {

  }

}

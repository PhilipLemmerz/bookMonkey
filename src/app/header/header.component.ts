import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pl-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  name: string ='header';

  ngOnInit(): void {


  }

}

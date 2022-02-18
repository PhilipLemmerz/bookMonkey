import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'pl-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {

  @Input() book: any;


  constructor() { }

  ngOnInit(): void {  }

}

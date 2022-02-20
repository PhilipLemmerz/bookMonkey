import { Component, EventEmitter, OnInit } from '@angular/core';
import { Book } from 'src/app/shared/book';

@Component({
  selector: 'pl-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent implements OnInit {

  constructor() { }

  book: Book[];
  otherEvent = new EventEmitter<any>();
  ourEvent = new EventEmitter<any>();

  ngOnInit(): void {

    this.book = [
      {
        title: 'Angular',
        subtitle: 'das Praxishandbuch',
        isbn: '11111',
        published: new Date(),
        authors: ['Mein Autor'],
        description: 'Das ist unser Buch',
        thumbnails: [{url: 'https://dieurl', title: 'Angular Bild'}]
      },
      {
        title: 'React',
        subtitle: 'das Praxishandbuch',
        isbn: '22222',
        published: new Date(),
        authors: ['zweiter Autor'],
        description: 'Das ist unser React Buch',
        thumbnails: [{url: 'https://dieurlvon React', title: 'React Bild'}]
      }
    ];
  }

  emitIt(book: any) {
    this.ourEvent.emit(book);
    console.log(book)
  }

  doIt(book: any) {
    this.otherEvent.emit(book)
  }

}



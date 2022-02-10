import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'pl-create-new-book',
  templateUrl: './create-new-book.component.html',
  styleUrls: ['./create-new-book.component.scss']
})
export class CreateNewBookComponent implements OnInit {

  constructor(private bs : BookStoreService) { }

  ngOnInit(): void {
  }

  createNewBook(book: Book) {
    this.bs.create(book).subscribe(
      book => console.log('buch hinzugefügt')
    )
  }

}

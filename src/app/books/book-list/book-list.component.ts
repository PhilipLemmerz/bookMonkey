import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';



@Component({
  selector: 'pl-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  constructor(private bs: BookStoreService) { }

  books$:  Observable<Book[]>;

  ngOnInit(): void {
    this.books$ = this.bs.getAll();

  }




}

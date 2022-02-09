import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'pl-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private bs: BookStoreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  book?: Book;
  isbn: string | null = ''

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      param => {
        this.isbn = param.get('isbn');
        this.subscribeBook();
      }
    );
  }

  subscribeBook() {
    if (typeof this.isbn === 'string') {
      this.bs.getSingle(this.isbn).subscribe(
        res => this.book = res
      );
    }
  }

  tranformRatingToArray(rating: number) {   // erstellung eines Arrays mit 5 Stellen aus einer Nummer.
    return new Array(rating);
  }

  deleteBook() {
    if (this.book && confirm('Möchten Sie dieses Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn).subscribe(
        res => this.router.navigateByUrl('/bücher')
      );
    }
  }
}

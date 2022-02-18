import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';


@Component({
  selector: 'pl-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {

  constructor(private bs: BookStoreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  book$: Observable<Book>;
  isbn: string | null = ''

  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(
      param => {
        this.isbn = param.get('isbn');
        this.book$ = this.bs.getSingle(this.isbn as string)
      }
    );
  }


  tranformRatingToArray(rating: number) {   // erstellung eines Arrays mit 5 Stellen aus einer Nummer.
    return new Array(rating);
  }

  deleteBook() {
    if (this.book$ && confirm($localize`\:@@BookDetail\:deleteConfirm\: Möchten Sie dieses Buch wirklich löschen?`)) {
      this.bs.remove(this.isbn as string).subscribe(
        res => this.router.navigateByUrl('/bücher')
      );
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'pl-create-new-book',
  templateUrl: './create-new-book.component.html',
  styleUrls: ['./create-new-book.component.scss']
})
export class CreateNewBookComponent implements OnInit {

  constructor(private bs: BookStoreService, private activatedRoute: ActivatedRoute, private router: Router) { }

  reactiveForm: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(   // eigener Code -> ließt url-Paramter aus und läd entweder reactive oder template form
      param => {
        if (param.get('form') == 'reactive') {
          this.reactiveForm = true;
        }
      }
    )

  }

  createNewBook(book: Book) {
    this.bs.create(book).subscribe(
      book => this.router.navigateByUrl('/bücher')
    )
  }

}

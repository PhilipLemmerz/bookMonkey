import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/shared/book';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'pl-routing-test',
  templateUrl: './routing-test.component.html',
  styleUrls: ['./routing-test.component.scss']
})
export class RoutingTestComponent implements OnInit {

  constructor(private router: Router, private bs : BookStoreService) { }

  books$ : Observable<Book[]> = this.bs.getAll();

  ngOnInit(): void {
  }

  showDetail(isbn: string) {
    this.router.navigateByUrl(`testing/${isbn}`);
  }

}

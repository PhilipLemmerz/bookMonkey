
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Book } from '../../shared/book';
import { BookStoreService } from '../../shared/book-store.service';

@Component({
  selector: 'pl-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private bs: BookStoreService, private router: Router) { }

  book: Book;

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('isbn') as string),                // wir greifen auf den Parameter (isbn) zu und überschreiben den Typ manuell als String
      switchMap((params: string) => this.bs.getSingle(params))    // Umwandlung Observable in eine Buchabfrage vom bookStoreService (switchMap -> wenn sich route ändert dann abbruch)
    ).subscribe(res => this.book = res                            // wir könnten auch SwitchMap(isbn: string) schreiben der Parameter Name ist hier egal
    );                                                            // zum Schluss setzen wir unsere lokale book Variable gleich den Server Response mit dem Buch.
  }

  updateBook(updatedbook: Book) {
    this.bs.update(updatedbook).subscribe(
      res => this.router.navigateByUrl('/bücher')
    )
  }
}

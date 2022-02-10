import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, Subject, switchMap, tap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'pl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private bs: BookStoreService) {

  }

  entry$: Subject<string> = new Subject();
  bookResult: Book[] = [];
  showResult: boolean = false;
  isLoading: boolean = false;

  ngOnInit(): void {
    this.entry$.pipe(
      filter(term => term.length >= 3),                              // erst wenn die Eingabe im Suchfeld mind. 3 Zeichen hat.
      debounceTime(500),                                            // erst wenn mind. 500ms keine neuen Daten erhalten wurden.
      distinctUntilChanged(),                                       // keine gleichen Bücher hintereinander.
      tap(()=> this.isLoading = true ),                             // für das Anzeigen des Ladebalken
      switchMap(searchTerm => this.bs.searchBook(searchTerm)),      // Suchbegriff-Datenstrom wird umgewandelt in HTTP-Request.
      tap(()=> this.isLoading = false)                              // für das Anzeigen des Ladebalken
    ).subscribe(book => {
      this.bookResult = book;
      console.log(this.bookResult);
    })
  }

  removeResult() {
    setTimeout(()=>{
      this.showResult = false
    },500);
  }
}


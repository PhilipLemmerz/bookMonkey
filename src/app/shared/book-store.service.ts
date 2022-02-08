import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Book } from './book';
import { BookFactory } from './book-factory';
import { BookRaw } from './book-raw';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com';

  constructor(private http: HttpClient) { }


  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      map(bookRawArray => bookRawArray.map(
        book => BookFactory.transformBookRaw(book)
      )
      )
    )
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/books/${isbn}`).pipe(
      map(bookRaw => BookFactory.transformBookRaw(bookRaw))
    );
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`,
      { responseType: 'text' }
    );
  }
}


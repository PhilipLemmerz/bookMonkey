import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, retry } from 'rxjs';
import { Book } from './book';
import { BookFactory } from './book-factory';
import { BookRaw } from './book-raw';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com/secure';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book[]> {
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(
      map(bookRawArray => bookRawArray.map(
        book => BookFactory.transformBookRaw(book)
      ))
    )
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/books/${isbn}`).pipe(
      retry(3),
      map(bookRaw => BookFactory.transformBookRaw(bookRaw)),
    );
  }

  searchBook(term: string) {
    return this.http.get<BookRaw[]>(`${this.api}/books/search/${term}`).pipe(
      map(bookRawArray => bookRawArray.map(
        book => BookFactory.transformBookRaw(book)
      ))
    )
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book/${isbn}`,
      { responseType: 'text' }
    );
  }

}


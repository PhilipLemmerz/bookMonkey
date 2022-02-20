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
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(  // 2x map -> da wir auf die einezlenen Book Objekte in dem Book Array mappen müssen.
      map(bookRawArray => bookRawArray.map(
        book => BookFactory.transformBookRaw(book)
      ))
    )
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/books/${isbn}`).pipe(
      retry(3),                                                                 // wir versuchen 3x den Request bei einem Fehler
      map(bookRaw => BookFactory.transformBookRaw(bookRaw)), // umwandlung mittels unserer Mehtode in der BookFactory published: string -> published :date
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
      { responseType: 'text' }        // Wichtig -> wir erhalten eine leere Antwort vom Server also kein JSON -> Deshalb müssen wir den Typ Text angeben sonst Fehler.
    );
  }

  create(book : Book) {
    return this.http.post(`${this.api}/book`, book, {responseType: 'text'})
  }

  update(book: Book) {
    return this.http.put(`${this.api}/book/${book.isbn}`, book, {responseType: 'text'})
  }

  checkIsbn(isbn: String) {
    return this.http.get(`${this.api}/book/${isbn}/check`)
  }

  getAllForTesting(): Observable<Book[]> {
    return this.http.get<any[]>(`${this.api}/books`);
  }
}


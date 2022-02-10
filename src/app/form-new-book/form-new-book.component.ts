import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/book';
import { BookFactory } from '../shared/book-factory';

@Component({
  selector: 'pl-form-new-book',
  templateUrl: './form-new-book.component.html',
  styleUrls: ['./form-new-book.component.scss']
})
export class FormNewBookComponent implements OnInit {

  constructor(private router: Router) { }

  book: Book = BookFactory.emptyBook();   // belegt die Varibale mit einem Blanko Buch Objekt

  formValid: boolean = true
  @Output() newBook = new EventEmitter<Book>();
  @ViewChild('createBookForm') createBookForm: NgForm   // Für Reset Methode holen wir uns die <form #Referenz> in die Klasse

  ngOnInit(): void {

  }

  submit() {
    if (this.createBookForm.valid) {
      this.formValid = true
      this.newBook.emit(this.book);             // Wir geben unser Buch in die äußere Component
      this.createBookForm.reset();               // setzen Formular zurück
      this.book = BookFactory.emptyBook();      // leeren unsere Variable
      setTimeout(()=> {
        this.router.navigateByUrl('/bücher');
      },200);
    } else this.formValid = false;
  }

}

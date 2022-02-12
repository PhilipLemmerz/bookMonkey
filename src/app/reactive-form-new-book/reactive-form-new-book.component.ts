import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book, Thumbnail } from '../shared/book';

@Component({
  selector: 'pl-reactive-form-new-book',
  templateUrl: './reactive-form-new-book.component.html',
  styleUrls: ['./reactive-form-new-book.component.scss']
})
export class ReactiveFormNewBookComponent implements OnInit, OnChanges {

  constructor(private router: Router) { }
  editing = false;
  showAuthorMinus = false
  showImageMinus = false;
  bookForm: any;
  invalidForm = false;
  @Output() newbook = new EventEmitter<Book>();
  @Input() book: Book;

  ngOnChanges() {
    this.editing = true;                        // wird vor ngOnInit() aufgerufen aber nur wenn ein @Input() Binding gesetzt oder geändert wird.
    this.initForm();
    // initialisiert dass Form
    this.setForm(this.book);
  }

  ngOnInit(): void {
    if (!this.book) {                   // wenn kein book vorhanden ist (also wir nicht im edit-Modus sind) - dann soll das Form normal neu initialisiert werden
      this.initForm();
    }

  }

  initForm() {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl(''),
      isbn: new FormControl({ value: '', disabled: this.editing }, [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('[0-9]+')]),
      published: new FormControl('', Validators.required),
      rating: new FormControl('', [Validators.maxLength(1), Validators.pattern('[0-5]')]),
      description: new FormControl(''),
      thumbnails: new FormArray([
        new FormGroup({
          url: new FormControl('', Validators.required),
          title: new FormControl('')
        })
      ]),
      authors: new FormArray([
        new FormControl('', Validators.required),
      ])
    })
  }

  setForm(book: Book) {
    this.bookForm.patchValue(book);
    this.setAuthorsAndThumbnails(book.authors, book.thumbnails);
  }

  setAuthorsAndThumbnails(authors: String[], thumbnails: any[]) {
    this.bookForm.get('authors').removeAt(0);
    for (let author of authors) {
      this.bookForm.get('authors').push(new FormControl(`${author}`))
    }
    this.bookForm.get('thumbnails').removeAt(0);
    for (let thumbnail of thumbnails) {
      this.bookForm.get('thumbnails').push(new FormGroup
        ({
          url: new FormControl(`${thumbnail.url}`),
          title: new FormControl(`${thumbnail?.title}`)
        }))
    }
  }

  addAuthor() {
    this.bookForm.get('authors').push(new FormControl('', Validators.required))
    this.showAuthorMinus = true;
  }

  reduceAuthor() {
    let lastIndex = this.bookForm.get('authors').length - 1;
    if (lastIndex > 1) {
      this.bookForm.get('authors').removeAt(lastIndex);
    }
    if (lastIndex == 1) {
      this.bookForm.get('authors').removeAt(lastIndex);
      this.showAuthorMinus = false;
    }
  }

  addImage() {
    this.bookForm.get('thumbnails').push(new FormGroup({ url: new FormControl('', Validators.required), title: new FormControl('') }));
    this.showImageMinus = true;
  }

  reduceImage() {
    const property = this.bookForm.get('thumbnails')
    let lastIndex = property.length - 1;
    if (lastIndex > 1) {
      property.removeAt(lastIndex);
    } else if (lastIndex == 1) {
      property.removeAt(lastIndex);
      this.showImageMinus = false;
    }
  }


  getAuthors() {
    return this.bookForm.get('authors').controls
  }

  getThumbnails() {
    return this.bookForm.get('thumbnails').controls
  }

  errorCheck(fieldname: string) {
    const field = this.bookForm.get(fieldname)
    return field.invalid && field.touched || this.invalidForm && field.invalid
  }

  errorCheckThumbnails(index: number) {
    const url = this.bookForm.get('thumbnails').get(`${index}`).get('url')
    return url.invalid && url.touched || this.invalidForm && url.invalid
  }

  errorCheckAuthor(index: number) {
    const field = this.bookForm.get('authors').get(`${index}`)
    return field.invalid && field.touched || this.invalidForm && field.invalid
  }

  submitBookForm() {
    const isbn = this.editing ? this.book.isbn : this.bookForm.get('isbn').value;
    const newBook: Book = {
      ...this.bookForm.value,
      isbn: isbn
    }
    if (this.bookForm.valid) {
      this.invalidForm = false;
      this.newbook.emit(newBook);
      this.bookForm.reset();
    } else {
      this.invalidForm = true;
    }
  }
}

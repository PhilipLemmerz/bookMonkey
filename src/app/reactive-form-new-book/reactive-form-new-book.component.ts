import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from '../shared/book';

@Component({
  selector: 'pl-reactive-form-new-book',
  templateUrl: './reactive-form-new-book.component.html',
  styleUrls: ['./reactive-form-new-book.component.scss']
})
export class ReactiveFormNewBookComponent implements OnInit {

  constructor(private router: Router) { }
  showAuthorMinus = false
  showImageMinus = false;
  bookForm: any;
  invalidForm = false;
  @Output() newbook = new EventEmitter<Book>();

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.bookForm = new FormGroup({
      title: new FormControl('', Validators.required),
      subtitle: new FormControl(''),
      isbn: new FormControl('', [Validators.required, Validators.minLength(13), Validators.maxLength(13), Validators.pattern('[0-9]+')]),
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
        new FormControl('', Validators.required)
      ])
    })
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
    if (this.bookForm.valid) {
      this.invalidForm = false;
      this.newbook.emit(this.bookForm.value);
      this.bookForm.reset();
      setTimeout(()=>{
        this.router.navigateByUrl('/bücher');
      },200);
    } else {
      this.invalidForm = true;
    }
  }
}

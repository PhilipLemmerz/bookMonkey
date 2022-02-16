import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';
import { ZoomDirective } from './shared/zoom.directive';
import { DelayDirective } from './shared/delay.directive';
import { IsbnPipe } from './shared/isbn.pipe';
import { BookDetailComponent } from './book-detail/book-detail.component';

@NgModule({
  declarations: [
    BookListComponent,
    BookListItemComponent,
    BookDetailComponent,
    IsbnPipe,
    ZoomDirective,
    DelayDirective
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }

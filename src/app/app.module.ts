import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SuiModule } from 'ng2-semantic-ui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TypeScriptComponent } from './learning/type-script/type-script.component';
import { HeaderComponent } from './header/header.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookListItemComponent } from './book-list/book-list-item/book-list-item.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { ServicesComponent } from './learning/services/services.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './learning/http/http.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ObservableComponent } from './learning/observable/observable.component';
import { SearchComponent } from './search/search.component';
import { TokenInterceptor } from './shared/token.interceptor';
import { FormsComponent } from './learning/forms/forms.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateNewBookComponent } from './create-new-book/create-new-book.component';
import { FormNewBookComponent } from './form-new-book/form-new-book.component';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { ReactiveFormNewBookComponent } from './reactive-form-new-book/reactive-form-new-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@NgModule({
  declarations: [
    AppComponent,
    TypeScriptComponent,
    HeaderComponent,
    BookListComponent,
    BookListItemComponent,
    BookDetailComponent,
    ServicesComponent,
    HomeComponent,
    HttpComponent,
    ObservableComponent,
    SearchComponent,
    FormsComponent,
    CreateNewBookComponent,
    FormNewBookComponent,
    ReactiveFormNewBookComponent,
    EditBookComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule,
    FormsModule,
    DateValueAccessorModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,  // Klassenname des Intercepor
      multi: true // hierdruch können wir mehrere Interceporen verweden
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

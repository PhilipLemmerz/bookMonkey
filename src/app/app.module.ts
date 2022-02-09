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
import { SearchComponent } from './search/search.component'
import { TokenInterceptor } from './shared/token.interceptor';

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
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SuiModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

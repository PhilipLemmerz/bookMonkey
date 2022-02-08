import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookListComponent } from './book-list/book-list.component';
import { HomeComponent } from './home/home.component';
import { HttpComponent } from './learning/http/http.component';
import { ObservableComponent } from './learning/observable/observable.component';
import { ServicesComponent } from './learning/services/services.component';
import { TypeScriptComponent } from './learning/type-script/type-script.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'typeScript', component: TypeScriptComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observables', component: ObservableComponent},
  {path: 'bücher', component: BookListComponent},
  {path: 'bücher/:isbn', component: BookDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateNewBookComponent } from './create-new-book/create-new-book.component';

const routes: Routes = [
  {path: 'admin', redirectTo: 'admin/erstellen', pathMatch:'full'},
  {path: 'admin/erstellen', component: CreateNewBookComponent},
  {path: 'admin/edit/:isbn', component: EditBookComponent},
  {path: 'admin/erstellen/:form', component: CreateNewBookComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

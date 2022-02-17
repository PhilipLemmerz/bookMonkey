import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBookComponent } from './edit-book/edit-book.component';
import { CreateNewBookComponent } from './create-new-book/create-new-book.component';
import { CanDeactivateFormGuardGuard } from '../can-deactivate-form-guard.guard';

const routes: Routes = [
  {path: '', redirectTo: 'erstellen', pathMatch:'full'},
  {path: 'erstellen', component: CreateNewBookComponent, canDeactivate: [CanDeactivateFormGuardGuard]},
  {path: 'edit/:isbn', component: EditBookComponent },
  {path: 'erstellen/:form', component: CreateNewBookComponent, canDeactivate: [CanDeactivateFormGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

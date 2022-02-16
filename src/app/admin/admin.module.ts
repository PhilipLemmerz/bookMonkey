import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { CreateNewBookComponent } from './create-new-book/create-new-book.component';
import { FormNewBookComponent } from './form-new-book/form-new-book.component';
import { ReactiveFormNewBookComponent } from './reactive-form-new-book/reactive-form-new-book.component';
import { SharedModule } from '../shared/shared.module';
import { DateValueAccessorModule } from 'angular-date-value-accessor';
import { EditBookComponent } from './edit-book/edit-book.component';


@NgModule({
  declarations: [
    CreateNewBookComponent,
    FormNewBookComponent,
    ReactiveFormNewBookComponent,
    EditBookComponent,
  ],
  imports: [
    AdminRoutingModule,
    SharedModule,
    DateValueAccessorModule,
  ]
})
export class AdminModule { }

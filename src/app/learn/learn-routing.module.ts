import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { ObservableComponent } from './observable/observable.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { TypeScriptComponent } from './type-script/type-script.component';

const routes: Routes = [
  {path: 'directives', component: DirectivesComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observables', component: ObservableComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'typeScript', component: TypeScriptComponent},
  {path: 'forms', component: FormsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }

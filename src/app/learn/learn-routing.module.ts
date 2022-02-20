import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HttpComponent } from './http/http.component';
import { ObservableComponent } from './observable/observable.component';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { RoutingTestComponent } from './testing/routing-test/routing-test.component';
import { TestingComponent } from './testing/testing.component';
import { WidthDepandanciesComponent } from './testing/width-depandancies/width-depandancies.component';
import { TypeScriptComponent } from './type-script/type-script.component';

const routes: Routes = [
  {path: 'directives', component: DirectivesComponent},
  {path: 'http', component: HttpComponent},
  {path: 'observables', component: ObservableComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'typeScript', component: TypeScriptComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'testing/width-depandancies', component: WidthDepandanciesComponent},
  {path: 'testing/routing-test', component: RoutingTestComponent},
  {path: 'testing/:isbn', component: TypeScriptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearnRoutingModule { }

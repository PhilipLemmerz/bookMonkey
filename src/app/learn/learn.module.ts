import { NgModule } from '@angular/core';
import { LearnRoutingModule } from './learn-routing.module';
import { TurntogreenDirective } from './directives/turntogreen.directive';
import { OurDirective } from './directives/our-directive.directive';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { SharedModule } from '../shared/shared.module';
import { HttpComponent } from './http/http.component';
import { ObservableComponent } from './observable/observable.component';
import { MultiplicatePipe } from './pipes/multiplication.pipe';
import { PipesComponent } from './pipes/pipes.component';
import { ServicesComponent } from './services/services.component';
import { TypeScriptComponent } from './type-script/type-script.component';


@NgModule({
  declarations: [
    DirectivesComponent,
    OurDirective,
    TurntogreenDirective,
    FormsComponent,
    HttpComponent,
    ObservableComponent,
    PipesComponent,
    MultiplicatePipe,
    ServicesComponent,
    TypeScriptComponent,
  ],
  imports: [
    LearnRoutingModule,
    SharedModule
  ]
})
export class LearnModule { }

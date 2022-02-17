import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CanActivateAdminGuardGuard } from './can-activate-admin-guard.guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  // lazyLoadingModules
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [CanActivateAdminGuardGuard]},
  {path: 'bücher', loadChildren: () => import('./books/books.module').then(m => m.BooksModule)},
  {path: 'learn', loadChildren: () => import('./learn/learn.module').then(m => m.LearnModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

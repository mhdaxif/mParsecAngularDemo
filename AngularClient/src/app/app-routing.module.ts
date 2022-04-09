import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  // feature module routes
  { path: '', pathMatch: 'full', redirectTo: 'users' },
  { path: 'users', loadChildren: () => import('./features/user/user.module').then(x => x.UserModule) },
  { path: 'books', loadChildren: () => import('./features/book/book.module').then(x => x.BookModule) },
  { path: '**', component: PageNotFoundComponent },

]; @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }





import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersComponent } from './users/users.component';
import { ViewUserComponent } from './view-user/view-user.component';

const routes: Routes = [
    {path: '',  component: UsersComponent },
    {path: 'add',  component: AddUserComponent },
    {path: 'view/:id',  component: ViewUserComponent },
    {path: 'update/:id',  component: UpdateUserComponent },
];

@NgModule({ 
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

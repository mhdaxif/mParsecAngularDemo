import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserRoutingModule } from './user-routing.module';
import { ViewUserComponent } from './view-user/view-user.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    imports: [
        UserRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule,
    ],
    declarations: [
        UsersComponent,
        AddUserComponent,
        UpdateUserComponent,
        ViewUserComponent,
    ],
})
export class UserModule { }
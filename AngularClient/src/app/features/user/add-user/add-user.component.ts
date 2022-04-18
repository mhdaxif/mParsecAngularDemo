import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {} as User;
  constructor(private http: HttpClient, private router: Router, private userService: UserService) {
    // this.userService = new UserService(http);
  }

  title = "Add User"
  ngOnInit(): void {
  }

  addUser() {
    let req$ = this.userService.addUser(this.user);

    req$.subscribe(response => {
      this.router.navigate(["/users/"]);
    },
      err => {
        console.error("error")
      })
  }
}

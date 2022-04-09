import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: User[] = [];
  shwoSuccess = false;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    let req$ = this.http.get<User[]>(`${environment.url}/api/users`);

    req$.subscribe(response => {
      this.userList = response;
    },
      err => {
        console.error("error")
      })
  }

  deleteUser(id: number) {
    let req$ = this.http.delete(`${environment.url}/api/users/${id}`);

    req$.subscribe(response => {
      // show success for 5 sec
      this.shwoSuccess = true;
      setTimeout(() => {
        this.shwoSuccess = false;
      }, 5 * 1000);

      this.getUsers();
    },
      err => {
        console.error("error")
      })
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = {} as User;
  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
  }

  addUser() {
    let req$ = this.http.post(`${environment.url}/api/users`, this.user);

    req$.subscribe(response => {
      this.router.navigate(["/users/"]);
    },
      err => {
        console.error("error")
      })
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {
  user: User = {} as User;
  id: any;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute, private router: Router) {
    activateRoute.params.subscribe(x => {
      this.id = x['id'];
    })
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    let req$ = this.http.get<User>(`${environment.url}/api/users/${this.id}`);
    req$.subscribe(response => {
      this.user = response;
    },
      err => {
        console.error("error")
      })
  }

  updateUser() {
    let req$ = this.http.put(`${environment.url}/api/users/${this.id}`, this.user);

    req$.subscribe(response => {
      this.router.navigate(["/users/"]);
    },
      err => {
        console.error("error")
      })
  }
}

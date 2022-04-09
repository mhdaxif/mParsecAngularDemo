import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {

  user: User | undefined;
  id: any;
  constructor(private http: HttpClient, private activateRoute: ActivatedRoute) {
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

}

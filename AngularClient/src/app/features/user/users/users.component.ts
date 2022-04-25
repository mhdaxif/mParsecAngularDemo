import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book, User } from 'src/app/shared/models/models';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/core/services/user.service';
import { BookService } from 'src/app/core/services/book.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  userList: User[] = [];
  shwoSuccess = false;
  userBooks?: Book[];
  selectedBook?: Book;
  constructor(private userService: UserService, private bookService: BookService) { 
  }
  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    let req$ = this.userService.getUsers();

    req$.subscribe(response => {
      this.userList = response;
    },
      err => {
        console.error("error")
      },
      )
  }

  deleteUser(id: number) {
    let req$ = this.userService.deleteUser(id);

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

  getUserBooks(userId: number) {
    let req$ = this.userService.getUserBooks(userId);

    req$.subscribe(books => {
      this.userBooks = books;
    },
      err => {
        console.error("error")
      })
  }


  handleBookClick(data: any){
    console.log(data)
    this.selectedBook = data.selectedBook;
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/models';

@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss']
})
export class UserBooksComponent implements OnInit {

  @Input() books?: Book[];
  @Output() onBookClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onBookSelection(book: Book){
    this.onBookClick.emit(
      {
        selectedBook: book,
        sender: "user-books"
      }
    );
  }

}

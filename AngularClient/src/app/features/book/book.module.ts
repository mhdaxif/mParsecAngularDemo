import { NgModule } from '@angular/core';
import { BooksComponent } from './books/books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookRoutingModule } from './book-routing.module';



@NgModule({
  declarations: [
    BooksComponent,
    AddBookComponent,
    UpdateBookComponent,
    ViewBookComponent
  ],
  imports: [
    BookRoutingModule
  ]
})
export class BookModule { }

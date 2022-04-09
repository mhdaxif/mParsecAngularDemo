import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ViewBookComponent } from './view-book/view-book.component';

const routes: Routes = [
    {path: '',  component: BooksComponent },
    {path: 'add',  component: AddBookComponent },
    {path: 'view/:id',  component: ViewBookComponent },
    {path: 'update/:id',  component: UpdateBookComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }

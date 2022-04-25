import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BulbDirective } from './directives/bulb-directive';
import { EmailMaskPipe } from './pipes/email-mask';
import { UserBooksComponent } from './components/user-books/user-books.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        EmailMaskPipe,
        BulbDirective,
        UserBooksComponent,
    ],
    exports: [
        PageNotFoundComponent,
        UserBooksComponent,
        EmailMaskPipe,
        BulbDirective,
    ],
    imports:[
        CommonModule
    ]
})
export class SharedModule { }

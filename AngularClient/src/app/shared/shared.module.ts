import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BulbDirective } from './directives/bulb-directive';
import { EmailMaskPipe } from './pipes/email-mask';

@NgModule({
    declarations: [
        PageNotFoundComponent,
        EmailMaskPipe,
        BulbDirective,
    ],
    exports: [
        PageNotFoundComponent,
        EmailMaskPipe,
        BulbDirective,
    ],
})
export class SharedModule { }

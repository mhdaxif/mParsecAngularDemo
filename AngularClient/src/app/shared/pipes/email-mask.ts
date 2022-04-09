import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'emailMask'
})

export class EmailMaskPipe implements PipeTransform {
    transform(email: string = ""): string {
        if (!email) return email;

        let emailParts = email.split("@");
        if (emailParts.length > 1) {
            email = `*****@${emailParts[1]}`
        }

        return email;
    }
}
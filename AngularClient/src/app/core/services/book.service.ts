import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class BookService {
    private endPoint = "api/books"
    constructor(private http: HttpClient) { }

    getRoles() {
        return this.http.get(`${environment.url}/${this.endPoint}`);
    }
}
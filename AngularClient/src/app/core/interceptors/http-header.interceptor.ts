import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)
        const headers = req.headers
            .set("Authorization", "bearer " + localStorage.getItem('auth-token'))        
            .set("test-header", "test header data");
            
        const authReq = req.clone({headers})
        return next.handle(authReq);
    }

}
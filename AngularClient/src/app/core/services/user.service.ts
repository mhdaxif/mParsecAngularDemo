import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "src/app/shared/models/models";
import { environment } from "src/environments/environment";

@Injectable()
export class UserService{
    endPoint = "api/users";
    constructor(private http: HttpClient){
    }
    
    deleteUser(id: number) {
        return this.http.delete(`${environment.url}/${this.endPoint}/${id}`);
    }
    
    addUser(user: User){
        return this.http.post(`${environment.url}/api/users`, user)
    }
    
    getUsers() {
        return this.http.get<User[]>(`${environment.url}/api/users`);
    }
    
    getUser(id: any) {
        return this.http.get<User>(`${environment.url}/api/users/${id}`);
    }
}
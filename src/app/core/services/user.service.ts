import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://uhbapi.onrender.com';
  private http = inject(HttpClient)
  constructor() { }

  getUsersData(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getRoles(): Observable<any> {
    return this.http.get(`${this.apiUrl}/roles`);
  }
  assignRoleToUser(username: string, role: string) {
    const params = new HttpParams().set('role', role);
    console.log(username);
    console.log(role);
    return this.http.put(`${this.apiUrl}/user-role/${username}`, null, { params })
  }
}

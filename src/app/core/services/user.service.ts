import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://uhbapi.onrender.com';
  private http = inject(HttpClient)
  constructor() { }

  getUsersData() {
    return this.http.get(`${this.apiUrl}/users`);
  }
}

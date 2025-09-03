import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';

import { UserDetails } from '../interfaces/userData';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: UserDetails | null = null;
  private apiUrl = 'https://uhbapi.onrender.com';
  private http = inject(HttpClient);
  private platformId = inject(PLATFORM_ID);
  private isBrowser: boolean;

  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      const userData = localStorage.getItem('user');
      if (userData) {
        this.currentUser = JSON.parse(userData);
      }
    }
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data, { withCredentials: true });
  }
  getUser(): UserDetails | null {
    return this.currentUser;
  }
  setUser(user: UserDetails): void {
    this.currentUser = user;
    localStorage.setItem('user', JSON.stringify(user));
  }
  getRole(): string | null {
    return this.currentUser?.role ?? null;
  }
  hasRole(role: string): boolean {
    return this.getRole() === role;
  }
  hasAnyRole(roles: string[]): boolean {
    return roles.includes(this.getRole() ?? '');
  }
  changePassword(data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/change-password`, data, { withCredentials: true });
  }
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
  }
}

import { inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { AccessRequest, AccessResponse, User } from '../models/authentication';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Service()
export class AuthService {
    private currentUser = signal<User | null>(null);
    private router = inject(Router);
    private http = inject(HttpClient);
    private platformId = inject(PLATFORM_ID);
    private isBrowser = signal<boolean>(false);

    constructor() {
        this.isBrowser.set(isPlatformBrowser(this.platformId));
        if (this.isBrowser()) {
            const userData = localStorage.getItem('user');
            if (userData) { this.currentUser.set(JSON.parse(userData)) };
        }
    }

    setToken(token: string): void {
        localStorage.setItem('access_token', token);
    }

    getToken(): string | null {
        return localStorage.getItem('access_token');
    }

    setUser(user: User) {
        this.currentUser.set(user);
    }

    getUser() {
        return this.currentUser();
    }

    clearToken(): void {
        return localStorage.removeItem('access_token');
    }

    login(data: AccessRequest): Observable<AccessResponse> {
        return this.http.post<AccessResponse>(`${environment.apiUrl}/login`, data, { params: { platform: 'web' } })
    }
    register(data: AccessRequest): Observable<AccessResponse> {
        return this.http.post<AccessResponse>(`${environment.apiUrl}/register`, data, { params: { platform: 'web' } });
    }
    logout(): void {
        this.clearToken();
        localStorage.removeItem('user');
        this.router.navigate(['/'])
    }

}

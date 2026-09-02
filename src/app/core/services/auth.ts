import { inject, Service, signal } from '@angular/core';
import { AccessRequest, AccessResponse, User } from '../models/authentication';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Service()
export class AuthService {
    private currentUser = signal<User | null>(null);
    private token = signal<string | null>(null);
    private router = inject(Router);
    private http = inject(HttpClient);

    setToken(token: string): void {
        // localStorage.setItem('access_token', token);
        
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

    getRoles(): string[] {
        return this.currentUser()?.roles ?? [];
    }

    hasAnyRole(roles: string[]): boolean {
        const userRoles = this.getRoles();
        return roles.some(role => userRoles.includes(role));
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

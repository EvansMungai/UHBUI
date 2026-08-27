import { inject, PLATFORM_ID, Service, signal } from '@angular/core';
import { AccessRequest, AccessResponse, UserDetials } from '../models/authentication';
import { HttpClient } from '@angular/common/http';
import { isPlatformBrowser } from '@angular/common';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class AuthService {
    private currentUser!: UserDetials | null;
    private http = inject(HttpClient);
    private platformId = inject(PLATFORM_ID);
    private isBrowser = signal<boolean>(false);

    constructor() {
        this.isBrowser.set(isPlatformBrowser(this.platformId));
        if (this.isBrowser()) {
            const userData = localStorage.getItem('user');
            if (userData) { this.currentUser = JSON.parse(userData) };
        }
    }

    login(data: AccessRequest): Observable<AccessResponse> {
        return this.http.post<AccessResponse>(`${environment.apiUrl}/login`, data, { params: { platform: 'web' } })
    }
    register(data: AccessRequest): Observable<AccessResponse> {
        return this.http.post<AccessResponse>(`${environment.apiUrl}/register`, data, { params: { platform: 'web' } });
    }
}

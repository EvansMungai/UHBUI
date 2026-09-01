import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { ApplicationData } from '../models/application';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class Application {
    private http = inject(HttpClient);
    createApplication(data: ApplicationData): Observable<any> {
        return this.http.post(`${environment.apiUrl}/application`, data);
    }
}

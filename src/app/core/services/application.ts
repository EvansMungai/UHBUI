import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { AllocateRoomRequest, ApplicationData, ApplicationUpdateRequest } from '../models/application';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class Application {
    private http = inject(HttpClient);
    createApplication(data: ApplicationData): Observable<any> {
        return this.http.post(`${environment.apiUrl}/application`, data);
    }
    reviewApplication(applicationNo: number, data: ApplicationUpdateRequest): Observable<any> {
        return this.http.put(`${environment.apiUrl}/application/${applicationNo}/status`, data);
    }
    allocateRoomToApplicant(applicationNo: number, data: AllocateRoomRequest): Observable<any> {
        return this.http.put(`${environment.apiUrl}/application/${applicationNo}/room`, data);
    }
}

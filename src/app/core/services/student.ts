import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { StudentData } from '../models/student';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class Student {
    private http = inject(HttpClient);

    createStudentDetails(data: StudentData): Observable<any> {
        return this.http.post(`${environment.apiUrl}/student`, data);
    }
}

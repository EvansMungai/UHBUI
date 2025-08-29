import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationData } from '../interfaces/applicationData';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private http = inject(HttpClient);
  private apiUrl = 'https://uhbapi.onrender.com';

  constructor() { }

  getApplications(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/applications`);
  }
  getSpecificApplication(applicationId: number): Observable<ApplicationData> {
    return this.http.get<ApplicationData>(`${this.apiUrl}/application/${applicationId}`);
  }
  getAcceptedApplications(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/accepted-applications`);
  }
  getRejectedApplications(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/rejected-applications`);
  }
  getAllocatedRooms(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/assigned-applications`);
  }
  createApplication(data: ApplicationData): Observable<any> {
    return this.http.post(`${this.apiUrl}/application`, data);
  }
  reviewApplication(applicationId: number, status: string, preferredHostel: string): Observable<any> {
    const params = new HttpParams().set('status', status).set('preferredHostel', preferredHostel);
    return this.http.put(`${this.apiUrl}/application/${applicationId}/status`, null, { params });
  }
}

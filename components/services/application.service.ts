import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ApplicationData } from '../interfaces/applicationData';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  private apiUrl = 'http://uhb.runasp.net';

  constructor(private http: HttpClient) { }

  getApplications(): Observable<ApplicationData[]>{
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/applications`);
  }
  getAcceptedApplications(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/accepted-applications`);
  }
  getRejectedApplications(): Observable<ApplicationData[]> {
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/rejected-applications`);
  }
  getAllocatedRooms(): Observable<ApplicationData[]>{
    return this.http.get<ApplicationData[]>(`${this.apiUrl}/assigned-applications`);
  }
}

import { Injectable, inject } from '@angular/core';
import { HostelData } from '../interfaces/hostelData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  private http = inject(HttpClient);
  private apiUrl = 'https://uhbapi.onrender.com';

  constructor() { }

  getHostelsData(): Observable<HostelData[]> {
    return this.http.get<HostelData[]>(`${this.apiUrl}/hostels`);
  }
  createHostel(data: HostelData): Observable<any> {
    console.log(data);
    return this.http.post<HostelData>(`${this.apiUrl}/hostel`, data);
  }
}

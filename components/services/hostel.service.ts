import { Injectable } from '@angular/core';
import { HostelData } from '../interfaces/hostelData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  private apiUrl = 'http://uhb.runasp.net'

  constructor(private http: HttpClient) { }
  
  getHostelsData(): Observable<HostelData[]> {
    return this.http.get<HostelData[]>(`${this.apiUrl}/hostels`);
  }
}

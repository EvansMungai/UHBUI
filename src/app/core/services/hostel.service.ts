import { Injectable, inject } from '@angular/core';
import { HostelData } from '../interfaces/hostelData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  private http = inject(HttpClient);
  private apiUrl = 'http://uhb.runasp.net'

  constructor() { }

  getHostelsData(): Observable<HostelData[]> {
    return this.http.get<HostelData[]>(`${this.apiUrl}/hostels`);
  }
}

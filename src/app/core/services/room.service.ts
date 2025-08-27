import { Injectable, inject } from '@angular/core';
import { RoomData } from '../interfaces/roomData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private http = inject(HttpClient);
  private apiUrl = 'http://uhb.runasp.net';

  constructor() { }

  getRoomsData(): Observable<RoomData[]> {
    return this.http.get<RoomData[]>(`${this.apiUrl}/rooms`);
  }
}

import { Injectable } from '@angular/core';
import { RoomData } from '../interfaces/roomData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://uhb.runasp.net';

  constructor(private http: HttpClient) { }

  getRoomsData(): Observable<RoomData[]> {
    return this.http.get<RoomData[]>(`${this.apiUrl}/rooms`);
  }
}

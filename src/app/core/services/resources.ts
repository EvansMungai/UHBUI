import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { HostelData, RoomData } from '../models/hostel';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Service()
export class Resources {
    private http = inject(HttpClient);

    createHostel(data: HostelData): Observable<any>{
        return this.http.post(`${environment.apiUrl}/hostel`, data);
    }
    createRoom(data: RoomData): Observable<any>{
        return this.http.post(`${environment.apiUrl}/room`, data);
    }
}

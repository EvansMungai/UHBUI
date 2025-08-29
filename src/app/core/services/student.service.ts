import { Injectable, inject } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StudentData } from '../interfaces/studentData';
import { ApplicationData } from '../interfaces/applicationData';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private http = inject(HttpClient);
  private apiUrl = 'https://uhbapi.onrender.com';

  constructor() { }
  getStudentData(): Observable<StudentData[]> {
    return this.http.get<StudentData[]>(`${this.apiUrl}/students`);
  }
  getApplicationData(registrationNo: string): Observable<ApplicationData[]> {
    const encodedRegNo = encodeURIComponent(registrationNo);
    return this.http.get<ApplicationData>(`${this.apiUrl}/application/${encodedRegNo}`).pipe(map((data: ApplicationData) => [data]));
  }
  getAccommodationData(registrationNo: string): Observable<ApplicationData[]> {
    const encodedRegNo = encodeURIComponent(registrationNo);
    return this.http.get<ApplicationData>(`${this.apiUrl}/application/${encodedRegNo}`).pipe(map((data: ApplicationData) => [data]));
  }
  // getAccommodationDetails(): { RegistrationNo: string, Status: string, PreferredHostel: string, RoomNo: string }[] {
  //   return this.applicationInfoList.map(data => ({
  //     RegistrationNo: data.RegistrationNo,
  //     Status: data.Status,
  //     PreferredHostel: data.PreferredHostel,
  //     RoomNo: data.RoomNo
  //   }))
  // }
  // getStudentApplications(): { ApplicationPeriod: string, RegistrationNo: string, Status: string }[] {
  //   return this.applicationInfoList.map(data => ({
  //     ApplicationPeriod: data.ApplicationPeriod,
  //     RegistrationNo: data.RegistrationNo,
  //     Status: data.Status,
  //     PreferredHostel: data.PreferredHostel
  //   }))
}

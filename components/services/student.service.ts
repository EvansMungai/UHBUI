import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentInfo } from '../interfaces/mock-studentData';
import { StudentData } from '../interfaces/studentData';
import { ApplicationInfo } from '../interfaces/mock_applicationData';
import { ApplicationData } from '../interfaces/applicationData';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  protected studentInfoList: StudentData[] = StudentInfo;
  protected applicationInfoList: ApplicationData[] = ApplicationInfo;
  constructor() { }
  getStudentData(): StudentData[] {
    return this.studentInfoList;
  }
  getApplicationData(): ApplicationData[] {
    return this.applicationInfoList;
  }
  getApplicationDetails(): { ApplicationPeriod: string, RegistrationNo: string, Status: string }[] {
    return this.applicationInfoList.map(data => ({
      ApplicationPeriod: data.ApplicationPeriod,
      RegistrationNo: data.RegistrationNo,
      Status: data.Status
    }))
  }
  getAccommodationDetails(): { RegistrationNo: string, Status: string, PreferredHostel: string, RoomNo: string }[] {
    return this.applicationInfoList.map(data => ({
      RegistrationNo: data.RegistrationNo,
      Status: data.Status,
      PreferredHostel: data.PreferredHostel,
      RoomNo: data.RoomNo
    }))
  }
}

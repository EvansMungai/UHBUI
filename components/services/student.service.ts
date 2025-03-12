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
  getStudentData(): StudentData[]{
    return this.studentInfoList;
  }
  getApplicationData(): ApplicationData[]{
    return this.applicationInfoList;
  }
}

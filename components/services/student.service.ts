import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentInfo } from '../interfaces/mock-studentData';
import { StudentData } from '../interfaces/studentData';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  protected studentInfoList: StudentData[] = StudentInfo;
  constructor() { }
  getStudentData(): StudentData[]{
    return this.studentInfoList
  }
}

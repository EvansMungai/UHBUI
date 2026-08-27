import { Component, signal } from '@angular/core';
import { Card } from "../../../components/card/card";
import { StudentData } from '../../../../core/models/student';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  imports: [Card],
  selector: 'app-student-dashboard',
  styleUrl: './student-dashboard.css',
  templateUrl: './student-dashboard.html',
})
export class StudentDashboard {
  currentRegNo = signal<string>('C026-01-0908/2022');

  studentResource = httpResource<StudentData>(() => {
    const regNo = this.currentRegNo().trim();
    if (!regNo) return undefined;

    return {
      url: `${environment.apiUrl}/student`,
      method: 'GET',
      params: { id: encodeURIComponent(regNo) }
    }
  });

  studentData = this.studentResource.value;
}

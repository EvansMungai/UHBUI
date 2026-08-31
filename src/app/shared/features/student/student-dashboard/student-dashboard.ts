import { Component, inject, signal } from '@angular/core';
import { Card } from "../../../components/card/card";
import { StudentData } from '../../../../core/models/student';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { AuthService } from '../../../../core/services/auth';
import { ApplicationData } from '../../../../core/models/application';
import { TableColumn } from '../../../../core/Table';
import { Table } from '../../../components/table/table';

@Component({
  imports: [Card, Table],
  selector: 'app-student-dashboard',
  styleUrl: './student-dashboard.css',
  templateUrl: './student-dashboard.html',
})
export class StudentDashboard {
  private authService = inject(AuthService);
  currentRegNo = signal<string>('');

  studentResource = httpResource<StudentData>(() => {
    const regNo = this.authService.getUser()?.regNo;
    if (!regNo) return undefined;

    return {
      url: `${environment.apiUrl}/student`,
      method: 'GET',
      params: { id: encodeURIComponent(regNo) }
    }
  });

  studentData = this.studentResource.value;

  applicationResource = httpResource<ApplicationData[]>(() => {
    const regNo = this.authService.getUser()?.regNo;
    if (!regNo) return undefined;

    return {
      url: `${environment.apiUrl}/user-applications`,
      method: 'GET',
      params: { id: encodeURIComponent(regNo) }
    }
  });
  applicationData = this.applicationResource.value;
  applicationColumns: TableColumn<ApplicationData>[] = [
    { key: 'applicationPeriod', label: 'Application Period' },
    { key: 'registrationNo', label: 'Registration Number' },
    { key: 'status', label: 'Status' },
  ]

  isNotFoundError(error: Error | null): boolean {
    return error instanceof HttpErrorResponse && error.status === 404;
  }
}

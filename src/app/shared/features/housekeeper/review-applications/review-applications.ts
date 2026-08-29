import { Component } from '@angular/core';
import { Card } from '../../../components/card/card';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { ApplicationData } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { TableColumn } from '../../../../core/Table';
import { Table } from '../../../components/table/table';

@Component({
  imports: [Card, Table],
  selector: 'app-review-applications',
  styleUrl: './review-applications.css',
  templateUrl: './review-applications.html',
})
export class ReviewApplications {
  applicationResource = httpResource<ApplicationData[]>(() => {
    return {
      url: `${environment.apiUrl}/applications`,
      method: 'GET'
    }
  });
  applicationData = this.applicationResource.value;


  tableColumns: TableColumn<ApplicationData>[] = [
    { key: 'applicationPeriod', label: 'Application Period' },
    { key: 'registrationNo', label: 'Registration Number' },
    { key: 'status', label: 'Application Status' },
    { key: 'preferredHostel', label: 'Preferred Hostel' }
  ];
  isNotFoundError(error: Error | null): boolean {
    return error instanceof HttpErrorResponse && error.status === 404;
  }
}

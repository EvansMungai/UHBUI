import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { ApplicationData } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { Table } from '../../../components/table/table';
import { TableColumn } from '../../../../core/Table';

@Component({
  imports: [Card, Table],
  selector: 'app-review-allocations',
  styleUrl: './review-allocations.css',
  templateUrl: './review-allocations.html',
})
export class ReviewAllocations {
  applicationResource = httpResource<ApplicationData[]>(() => {
    return {
      url: `${environment.apiUrl}/accepted-applications`,
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

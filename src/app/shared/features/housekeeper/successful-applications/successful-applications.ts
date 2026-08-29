import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { Table } from '../../../components/table/table';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { ApplicationData } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { TableColumn } from '../../../../core/Table';

@Component({
  imports: [Card, Table],
  selector: 'app-successful-applications',
  styleUrl: './successful-applications.css',
  templateUrl: './successful-applications.html',
})
export class SuccessfulApplications {
  applicationResource = httpResource<ApplicationData[]>(() => {
    return {
      url: `${environment.apiUrl}/accepted-applications`,
      method: 'GET'
    }
  });
  applicationData = this.applicationResource.value;

  tableColumns: TableColumn<ApplicationData>[] = [
    { key: 'applicationPeriod', label: "Application Period" },
    { key: 'registrationNo', label: "Registration Number" },
    { key: 'status', label: "Status" }
  ];
  isNotFoundError(error: Error | null): boolean {
    return error instanceof HttpErrorResponse && error.status === 404;
  }
}

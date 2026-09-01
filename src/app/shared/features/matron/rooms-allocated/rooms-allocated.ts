import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { ApplicationData } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { TableColumn } from '../../../../core/interfaces/Table';
import { Table } from '../../../components/table/table';

@Component({
  imports: [Card, Table],
  selector: 'app-rooms-allocated',
  styleUrl: './rooms-allocated.css',
  templateUrl: './rooms-allocated.html',
})
export default class RoomsAllocated {
  applicationResource = httpResource<ApplicationData[]>(() => {
    return {
      url: `${environment.apiUrl}/assigned-applications`,
      method: 'GET'
    }
  });
  applicationData = this.applicationResource.value;

  tableColumns: TableColumn<ApplicationData>[] = [
    { key: "roomNo", label: "Room Number" },
    { key: "registrationNo", label: "Registration Number" },
  ];
  isNotFoundError(error: Error | null): boolean {
    return error instanceof HttpErrorResponse && error.status === 404;
  }
}

import { Component } from '@angular/core';
import { Card } from '../../../components/card/card';
import { httpResource } from '@angular/common/http';
import { HostelData, RoomData } from '../../../../core/models/hostel';
import { environment } from '../../../../../environments/environment';
import { Table } from "../../../components/table/table";
import { TableColumn } from '../../../../core/Table';

@Component({
  imports: [Card, Table],
  selector: 'app-admin-dashboard',
  styleUrl: './admin-dashboard.css',
  templateUrl: './admin-dashboard.html',
})
export class AdminDashboard {
  hostelResource = httpResource<HostelData[]>(() => {
    return {
      url: `${environment.apiUrl}/hostels`,
      method: 'GET'
    }
  });
  hostelData = this.hostelResource.value;

  roomResource = httpResource<RoomData[]>(() => {
    return {
      url: `${environment.apiUrl}/rooms`,
      method: 'GET'
    }
  });
  roomData = this.roomResource.value;

  roomColumns: TableColumn<RoomData>[] = [
    { key: 'hostelNo', label: 'Hostel No' },
    { key: 'roomNo', label: 'Room No' },
  ]

  hostelColumns: TableColumn<HostelData>[] = [
    { key: 'hostelNo', label: 'Hostel No' },
    { key: 'hostelName', label: 'Hostel Name' },
    { key: 'capacity', label: 'Capacity' },
    { key: 'type', label: 'Hostel Type' },
  ]
}

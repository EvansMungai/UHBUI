import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { Observable } from 'rxjs';
import { ApplicationService } from '../../../core/services/application.service';

@Component({
  selector: 'app-allocated-rooms',
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './allocated-rooms.component.html',
  styleUrl: './allocated-rooms.component.css'
})
export class AllocatedRoomsComponent {
  private applicationService = inject(ApplicationService);

  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: "roomNo", header: "Room Number" },
    { key: "registrationNo", header: "Registration Number" },
  ];

  constructor() {
    const applicationService = this.applicationService;

    this.tableData = applicationService.getAllocatedRooms();
  }
}

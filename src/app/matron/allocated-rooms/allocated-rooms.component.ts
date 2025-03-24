import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { Observable } from 'rxjs';
import { ApplicationService } from '../../../../components/services/application.service';

@Component({
  selector: 'app-allocated-rooms',
  standalone: true,
  imports: [CommonModule,CardComponent, TableComponent],
  templateUrl: './allocated-rooms.component.html',
  styleUrl: './allocated-rooms.component.css'
})
export class AllocatedRoomsComponent {
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: "roomNo", header: "Room Number" },
    { key: "registrationNo", header: "Registration Number" },
  ];
  constructor(private applicationService: ApplicationService) {
    this.tableData = applicationService.getAllocatedRooms();
  }
}

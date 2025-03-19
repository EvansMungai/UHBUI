import { Component } from '@angular/core';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { StudentService } from '../../../../components/services/student.service';

@Component({
  selector: 'app-allocated-rooms',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './allocated-rooms.component.html',
  styleUrl: './allocated-rooms.component.css'
})
export class AllocatedRoomsComponent {
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: "RoomNumber", header: "Room Number" },
    { key: "RegistrationNo", header: "Registration Number" },
  ];
  constructor(private studentService: StudentService) {
    this.tableData = studentService.getAccommodationDetails();
  }
}

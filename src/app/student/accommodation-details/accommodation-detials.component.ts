import { Component } from '@angular/core';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';

@Component({
  selector: 'app-accommodation-detials',
  standalone: true,
  imports: [TableComponent, CardComponent],
  templateUrl: './accommodation-details.component.html',
  styleUrl: './accommodation-details.component.css'
})
export class AccommodationDetailsComponent {
  cardTitle: string = "Accommodation Details"
  tableData: any = [];
  tableColumns: TableColumn[] = [
    {key: 'RegistrationNo', header: "Registration Number", sortable: false},
    {key: 'Status', header: "Status", sortable: false},
    {key: 'PreferredHostel', header: "Preferred Hostel", sortable: false},
    {key: 'RoomNo', header: "Room Number", sortable: false},
  ];
  constructor(private studentService: StudentService){
    this.tableData = this.studentService.getAccommodationDetails();
  }
}

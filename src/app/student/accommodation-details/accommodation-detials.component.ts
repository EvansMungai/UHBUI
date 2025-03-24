import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accommodation-detials',
  standalone: true,
  imports: [CommonModule, TableComponent, CardComponent],
  templateUrl: './accommodation-details.component.html',
  styleUrl: './accommodation-details.component.css'
})
export class AccommodationDetailsComponent {
  cardTitle: string = "Accommodation Details"
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false },
    { key: 'preferredHostel', header: "Preferred Hostel", sortable: false },
    { key: 'roomNo', header: "Room Number", sortable: false },
  ];
  regNo: string = 'C026-01-0920/2022';
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getAccommodationData(this.regNo);
  }
}

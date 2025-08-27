import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../core/services/student.service';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-accommodation-detials',
  imports: [CommonModule, TableComponent, CardComponent],
  templateUrl: './accommodation-details.component.html',
  styleUrl: './accommodation-details.component.css'
})
export class AccommodationDetailsComponent {
  private studentService = inject(StudentService);
  
  cardTitle: string = "Accommodation Details"
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false },
    { key: 'preferredHostel', header: "Preferred Hostel", sortable: false },
    { key: 'roomNo', header: "Room Number", sortable: false },
  ];
  regNo: string = 'C026-01-0920/2022';
  constructor() {
    this.tableData = this.studentService.getAccommodationData(this.regNo);
  }
}

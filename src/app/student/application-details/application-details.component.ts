import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-application-details',
  standalone: true,
  imports: [CommonModule, TableComponent, CardComponent],
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.css'
})
export class ApplicationDetailsComponent {
  cardTitle: string = "Application Details";
  tableData: Observable<any> = {} as Observable<any>;
  regNo: string = 'C026-01-0920/2022';
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: "Application Period", sortable: false },
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false }
  ];
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getApplicationData(this.regNo);
  }
}

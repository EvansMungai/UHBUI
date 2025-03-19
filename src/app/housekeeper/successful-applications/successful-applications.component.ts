import { Component } from '@angular/core';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableComponent } from "../../../../components/elements/table/table.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { StudentService } from '../../../../components/services/student.service';

@Component({
  selector: 'app-successful-applications',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './successful-applications.component.html',
  styleUrl: './successful-applications.component.css'
})
export class SuccessfulApplicationsComponent {
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'ApplicationPeriod', header: "Application Period", sortable: false },
    { key: 'RegistrationNo', header: "Registration Number", sortable: false },
    { key: 'Status', header: "Status", sortable: false }
  ];
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getApplicationDetails();
  }
}

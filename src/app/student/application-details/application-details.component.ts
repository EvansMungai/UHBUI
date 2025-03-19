import { Component } from '@angular/core';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';

@Component({
  selector: 'app-application-details',
  standalone: true,
  imports: [TableComponent, CardComponent],
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.css'
})
export class ApplicationDetailsComponent {
  cardTitle: string = "Application Details";
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

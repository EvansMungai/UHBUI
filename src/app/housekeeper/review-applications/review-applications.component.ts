import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { StudentService } from '../../../../components/services/student.service';
import { TableAction, TableColumn } from '../../../../components/interfaces/table.interface';


@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {
  card1Title: string = "Total Applications";
  card2Title: string = "Total Accepted Applications";
  card3Title: string = "Total Rejected Applications";
  tableHeader: string = "Total Applications";
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'ApplicationPeriod', header: 'Application Period' },
    { key: 'RegistrationNo', header: 'Registration Number' },
    { key: 'Status', header: 'Application Status' },
    { key: 'PreferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [
    {
      label: 'Review',
      stylingClass: 'btn btn-accent btn-sm', 
      callback: () => console.log('The Review button has been clicked')
    }
  ]

  constructor(private studentService: StudentService) {
    this.tableData = studentService.getStudentApplications();
  }
}

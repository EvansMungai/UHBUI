import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableColumn, TableAction } from '../../../../components/interfaces/table.interface';

@Component({
  selector: 'app-review-allocations',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-allocations.component.html',
  styleUrl: './review-allocations.component.css'
})
export class ReviewAllocationsComponent {
  card1Title: string = "Total Applications";
  card2Title: string = "Total Allocated Rooms";
  card3Title: string = "Total Available Rooms";
  tableHeader: string = "Total Applications";
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'ApplicationPeriod', header: 'Application Period' },
    { key: 'RegistrationNo', header: 'Registration Number' },
    { key: 'Status', header: 'Application Status' },
    { key: 'PreferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [
    { label: 'Allocate Room', stylingClass: 'btn btn-accent btn-sm', callback: () => console.log('The review button has been clicked ') }
  ]

  constructor(private studentService: StudentService) {
    this.tableData = studentService.getStudentApplications();
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableColumn, TableAction } from '../../../../components/interfaces/table.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review-allocations',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-allocations.component.html',
  styleUrl: './review-allocations.component.css'
})
export class ReviewAllocationsComponent {
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'ApplicationPeriod', header: 'Application Period' },
    { key: 'RegistrationNo', header: 'Registration Number' },
    { key: 'Status', header: 'Application Status' },
    { key: 'PreferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [{ buttonProps: { text: 'Allocate Room',type:'button', variant: 'secondary', size: 'sm', action: (row: any, index: number) => this.navigateToAllocationRoute(row, index) } }]

  constructor(private studentService: StudentService, private router: Router) {
    this.tableData = studentService.getStudentApplications();
  }

  navigateToAllocationRoute(row: any, index: number) {
    this.router.navigate([`uhb/matron/view-allocation/${index}`]);
  }
}

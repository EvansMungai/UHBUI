import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { StudentService } from '../../../../components/services/student.service';
import { TableAction, TableColumn } from '../../../../components/interfaces/table.interface';
import { NavigationButton } from '../../../../components/interfaces/button.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'ApplicationPeriod', header: 'Application Period' },
    { key: 'RegistrationNo', header: 'Registration Number' },
    { key: 'Status', header: 'Application Status' },
    { key: 'PreferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [
    { buttonProps: { text: 'Review', type: 'button', variant: 'secondary', size: 'sm', action: (row: any, index: number) => this.navigateToApplicationRoute(row, index) } }
  ]

  constructor(private studentService: StudentService, private router: Router) {
    this.tableData = studentService.getStudentApplications();
  }

  navigateToApplicationRoute(row: any, index: number) {
    this.router.navigate([`uhb/housekeeper/view-application/${index}`]);
  }
}

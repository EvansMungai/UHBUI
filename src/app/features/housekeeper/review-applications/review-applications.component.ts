import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableAction, TableColumn } from '../../../core/interfaces/table.interface';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../core/services/application.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-review-applications',
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {
  private applicationService = inject(ApplicationService);
  private router = inject(Router);

  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: 'Application Period' },
    { key: 'registrationNo', header: 'Registration Number' },
    { key: 'status', header: 'Application Status' },
    { key: 'preferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [
    { buttonProps: { text: 'Review', type: 'button', variant: 'secondary', size: 'sm', action: (row: any, index: number) => this.navigateToApplicationRoute(row, index) } }
  ]

  constructor() {
    this.tableData = this.applicationService.getApplications();
  }

  navigateToApplicationRoute(row: any, index: number) {
    const applicationNo = row['applicationNo'];
    this.router.navigate([`uhb/housekeeper/view-application/${applicationNo}`]);
  }
}

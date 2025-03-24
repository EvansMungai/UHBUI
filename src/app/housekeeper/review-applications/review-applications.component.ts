import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableAction, TableColumn } from '../../../../components/interfaces/table.interface';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../../components/services/application.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-review-applications',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-applications.component.html',
  styleUrl: './review-applications.component.css'
})
export class ReviewApplicationsComponent {
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

  constructor(private applicationService: ApplicationService, private router: Router) {
    this.tableData = this.applicationService.getApplications();
  }

  navigateToApplicationRoute(row: any, index: number) {
    this.router.navigate([`uhb/housekeeper/view-application/${index}`]);
  }
}

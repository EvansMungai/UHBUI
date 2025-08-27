import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableColumn, TableAction } from '../../../core/interfaces/table.interface';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../core/services/application.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-allocations',
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-allocations.component.html',
  styleUrl: './review-allocations.component.css'
})
export class ReviewAllocationsComponent {
  private applicationService = inject(ApplicationService);
  private router = inject(Router);

  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: 'Application Period' },
    { key: 'registrationNo', header: 'Registration Number' },
    { key: 'status', header: 'Application Status' },
    { key: 'preferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [{ buttonProps: { text: 'Allocate Room', type: 'button', variant: 'secondary', size: 'sm', action: (row: any, index: number) => this.navigateToAllocationRoute(row, index) } }]

  constructor() {
    const applicationService = this.applicationService;

    this.tableData = applicationService.getAcceptedApplications();
  }

  navigateToAllocationRoute(row: any, index: number) {
    this.router.navigate([`uhb/matron/view-allocation/${index}`]);
  }
}

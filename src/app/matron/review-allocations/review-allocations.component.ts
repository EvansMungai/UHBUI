import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { TableColumn, TableAction } from '../../../../components/interfaces/table.interface';
import { Router } from '@angular/router';
import { ApplicationService } from '../../../../components/services/application.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-review-allocations',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-allocations.component.html',
  styleUrl: './review-allocations.component.css'
})
export class ReviewAllocationsComponent {
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: 'Application Period' },
    { key: 'registrationNo', header: 'Registration Number' },
    { key: 'status', header: 'Application Status' },
    { key: 'preferredHostel', header: 'Preferred Hostel' }
  ];
  tableActions: TableAction[] = [{ buttonProps: { text: 'Allocate Room',type:'button', variant: 'secondary', size: 'sm', action: (row: any, index: number) => this.navigateToAllocationRoute(row, index) } }]

  constructor(private applicationService: ApplicationService, private router: Router) {
    this.tableData = applicationService.getAcceptedApplications();
  }

  navigateToAllocationRoute(row: any, index: number) {
    this.router.navigate([`uhb/matron/view-allocation/${index}`]);
  }
}

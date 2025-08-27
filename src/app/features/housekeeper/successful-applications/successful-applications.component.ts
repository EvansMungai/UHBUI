import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { ApplicationService } from '../../../core/services/application.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-successful-applications',
    imports: [CommonModule, CardComponent, TableComponent],
    templateUrl: './successful-applications.component.html',
    styleUrl: './successful-applications.component.css'
})
export class SuccessfulApplicationsComponent {
  private applicationService = inject(ApplicationService);

  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: "Application Period", sortable: false },
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false }
  ];

  constructor() {
    this.tableData = this.applicationService.getAcceptedApplications();
  }
}

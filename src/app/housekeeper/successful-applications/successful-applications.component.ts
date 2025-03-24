import { Component } from '@angular/core';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { TableComponent } from "../../../../components/elements/table/table.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { ApplicationService } from '../../../../components/services/application.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-successful-applications',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './successful-applications.component.html',
  styleUrl: './successful-applications.component.css'
})
export class SuccessfulApplicationsComponent {
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: "Application Period", sortable: false },
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false }
  ];
  constructor(private applicationService: ApplicationService) {
    this.tableData = this.applicationService.getAcceptedApplications();
  }
}

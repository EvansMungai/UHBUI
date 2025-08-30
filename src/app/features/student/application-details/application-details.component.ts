import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from '../../../shared/elements/table/table.component';
import { StudentService } from '../../../core/services/student.service';
import { ApplicationService } from '../../../core/services/application.service';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { LoadingComponent } from '../../../shared/elements/loading/loading.component';

@Component({
  selector: 'app-application-details',
  imports: [CommonModule, TableComponent, CardComponent, LoadingComponent],
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.css'
})
export class ApplicationDetailsComponent implements OnInit {
  private studentService = inject(StudentService);
  private applicationService = inject(ApplicationService);

  cardTitle: string = "Application Details";
  tableData = signal<any | null>(null);
  regNo: string = 'C026-01-0914/2022';
  tableColumns: TableColumn[] = [
    { key: 'applicationPeriod', header: "Application Period", sortable: false },
    { key: 'registrationNo', header: "Registration Number", sortable: false },
    { key: 'status', header: "Status", sortable: false }
  ];
  loadingStyles: string = 'loading-spinner loading-lg';

  ngOnInit(): void {
    this.studentService.getSpecificStudentData(this.regNo).subscribe({
      next: data => {
        const regNo = data.regNo;
        this.applicationService.getApplications().subscribe({
          next: data => this.tableData.set(data.filter(a => a.registrationNo === regNo)),
          error: err => console.error('Error fetching specific application details')
        })
      },
      error: err => console.error('Error fetching specific student details: ', err)
    });
  }
}

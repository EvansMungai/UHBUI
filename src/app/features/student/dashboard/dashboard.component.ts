import { Component, OnInit, inject, signal } from '@angular/core';

import { CardComponent } from '../../../shared/elements/card/card.component';
import { StudentService } from '../../../core/services/student.service';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { LoadingComponent} from '../../../shared/elements/loading/loading.component';

@Component({
  selector: 'student-dashboard',
  imports: [CardComponent, TableComponent, LoadingComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent implements OnInit {
  private studentService = inject(StudentService);
  
  cardTitle: string = "Student Details"
  tableData = signal<any | null>(null);
  tableColumns: TableColumn[] = [
    { key: 'regNo', header: 'Registration Number' },
    { key: 'surname', header: 'Surname' },
    { key: 'firstName', header: 'First Name' },
    { key: 'secondName', header: 'Second Name' },
    { key: 'gender', header: 'Gender' },
  ];
  loadingStyles: string = 'loading-spinner loading-lg';

  ngOnInit(): void {
      this.studentService.getStudentData().subscribe({
        next: data => this.tableData.set(data),
        error: err => console.error('Error fetching student details: ', err)
      })
  }
}

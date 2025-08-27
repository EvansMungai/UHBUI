import { Component, OnInit, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CardComponent } from '../../../shared/elements/card/card.component';
import { StudentService } from '../../../core/services/student.service';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { TableColumn } from '../../../core/interfaces/table.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'student-dashboard',
  imports: [CardComponent, TableComponent, AsyncPipe],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent {
  private studentService = inject(StudentService);
  
  cardTitle: string = "Student Details"
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'regNo', header: 'Registration Number' },
    { key: 'surname', header: 'Surname' },
    { key: 'firstName', header: 'First Name' },
    { key: 'secondName', header: 'Second Name' },
    { key: 'gender', header: 'Gender' },
  ];

  constructor() {
    this.tableData = this.studentService.getStudentData();
  }
}

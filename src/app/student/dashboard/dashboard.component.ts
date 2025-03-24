import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent {
  cardTitle: string = "Student Details"
  tableData: Observable<any> = {} as Observable<any>;
  tableColumns: TableColumn[] = [
    { key: 'regNo', header: 'Registration Number' },
    { key: 'surname', header: 'Surname' },
    { key: 'firstName', header: 'First Name' },
    { key: 'secondName', header: 'Second Name' },
    { key: 'gender', header: 'Gender' },
  ];
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getStudentData();
  }
}

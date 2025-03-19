import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [CardComponent, TableComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent {
  cardTitle: string = "Student Details"
  tableData: any[] = [];
  tableColumns: TableColumn[] = [
    { key: 'RegistrationNo', header: 'Registration Number'},
    { key: 'Surname', header: 'Surname' },
    { key: 'FirstName', header: 'First Name' },
    { key: 'SecondName', header: 'Second Name' },
    { key: 'Gender', header: 'Gender' },
  ];
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getStudentData();
  }
}

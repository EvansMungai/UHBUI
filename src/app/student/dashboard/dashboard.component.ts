import { Component } from '@angular/core';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";

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
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getStudentData();
  }
}

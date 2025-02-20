import { Component } from '@angular/core';
import { TableComponent } from "../table/table.component";
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  tableData: any[] = [];
  constructor(private studentService: StudentService) {
    this.tableData = this.studentService.getStudentData();
  }
}

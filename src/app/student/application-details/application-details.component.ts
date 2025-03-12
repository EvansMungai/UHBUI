import { Component } from '@angular/core';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from "../../../../components/elements/card/card.component";

@Component({
  selector: 'app-application-details',
  standalone: true,
  imports: [TableComponent, CardComponent],
  templateUrl: './application-details.component.html',
  styleUrl: './application-details.component.css'
})
export class ApplicationDetailsComponent {
  cardTitle: string = "Application Details";
  tableData: any = [];
  constructor(private studentService: StudentService){
    this.tableData = this.studentService.getApplicationData();
  }
}

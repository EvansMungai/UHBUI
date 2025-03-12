import { Component } from '@angular/core';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";

@Component({
  selector: 'app-accommodation-detials',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './accommodation-detials.component.html',
  styleUrl: './accommodation-detials.component.css'
})
export class AccommodationDetialsComponent {
  tableData: any = [];
  constructor(private studentService: StudentService){
    this.tableData = this.studentService.getApplicationData();
  }
}

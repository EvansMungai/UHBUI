import { Component } from '@angular/core';
import { StudentService } from '../../../../components/services/student.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { CardComponent } from "../../../../components/elements/card/card.component";

@Component({
  selector: 'app-accommodation-detials',
  standalone: true,
  imports: [TableComponent, CardComponent],
  templateUrl: './accommodation-detials.component.html',
  styleUrl: './accommodation-detials.component.css'
})
export class AccommodationDetialsComponent {
  cardTitle: string = "Accommodation Details"
  tableData: any = [];
  constructor(private studentService: StudentService){
    this.tableData = this.studentService.getApplicationData();
  }
}

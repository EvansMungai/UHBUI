import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../../../components/services/student.service';
import { CardComponent } from '../../../../components/elements/card/card.component';
import { TableComponent } from '../../../../components/elements/table/table.component';
import { StateService } from '../../../../components/services/state.service';

@Component({
  selector: 'app-review-allocations',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent],
  templateUrl: './review-allocations.component.html',
  styleUrl: './review-allocations.component.css'
})
export class ReviewAllocationsComponent {
  card1Title: string = "Total Applications";
  card2Title: string = "Total Allocated Rooms";
  card3Title: string = "Total Available Rooms";
  tableHeader: string = "Total Applications";
  tableData: any[] = [];

  constructor(private studentService: StudentService, private stateService: StateService) {
    this.tableData = studentService.getStudentApplications();
  }
  get applicationsVisibility(): boolean {
    return this.stateService.applicationsVisibility;
  }

  toggleApplicationsVisibility(): void {
    this.stateService._applicationsVisibility = !this.applicationsVisibility;
  }
}

import { Component, Input } from '@angular/core';
import { StudentData } from '../../interfaces/studentData';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  TableHeading: string[] =["Registration Number", "Surname", "First Name", "Second Name", "Gender"];
  @Input() TableData: StudentData[] = [];
}

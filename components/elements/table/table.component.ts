import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  TableHeading: string[] =["Registration Number", "Surname", "First Name", "Second Name", "Gender"];
  TableData: string[] =["C026-01-0920/2022", "Julius", "Elizabeth", "Muthoni", "Female"];
}

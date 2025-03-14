import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentData } from '../../interfaces/studentData';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() TableData: any[] = [];
  tableHeaders: string[] = [];
  @Input() showActionColumn: boolean = false;
  constructor() { }
  ngOnInit(): void {
      this.tableHeaders = Object.keys(this.TableData[0]);
  }
}

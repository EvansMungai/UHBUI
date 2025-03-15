import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentData } from '../../interfaces/studentData';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  @Input() TableData: any[] = [];
  tableHeaders: string[] = [];
  @Input() showActionColumn: boolean = false;
  @Input() baseRoute: string = '';
  constructor() { }
  ngOnInit(): void {
    this.tableHeaders = Object.keys(this.TableData[0]);
  }
  generateRouterLink(row: any, index: number): string[] {
    const id = index + 1;
    return [this.baseRoute, id.toString()]
  }
}

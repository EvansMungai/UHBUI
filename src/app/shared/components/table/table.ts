import { Component, input } from '@angular/core';
import { TableColumn } from '../../../core/Table';

@Component({
  imports: [],
  selector: 'app-table',
  styleUrl: './table.css',
  templateUrl: './table.html',
})
export class Table<T extends object> {
  readonly data = input<T[]>([]);
  readonly columns = input<TableColumn<T>[]>([]);
  readonly emptyMessage = input('No data found');

  tableStyles = input<string>('w-full text-sm text-left rtl:text-right text-body');
  headingStyles = input<string>('text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default');
  bodyStyles = input<string>('bg-neutral-primary border-t border-default');
}

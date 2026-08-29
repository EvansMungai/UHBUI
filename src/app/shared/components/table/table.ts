import { Component, computed, input, signal } from '@angular/core';
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
  tableStyles = input<string>('w-full text-sm dark:text-white text-left rtl:text-right');
  headingStyles = input<string>('bg-accent dark:bg-neutral');
  bodyStyles = input<string>('border border-accent dark:border-secondary hover:bg-blue-200 dark:hover:bg-accent');

  pageSize = input<number>(5);
  currentPage = signal<number>(1);
  totalPages = computed(() => {
    const totalRecords = this.data().length;
    const size = this.pageSize();

    return size > 0 ? Math.ceil(totalRecords / size) : 0;
  });
  paginatedData = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize();
    const end = start + this.pageSize();

    return this.data().slice(start, end);
  })
  startRecord = computed(() => {
    if (this.data().length === 0) {
      return 0;
    }

    return (this.currentPage() - 1) * this.pageSize() + 1;
  });

  endRecord = computed(() => {
    return Math.min(
      this.currentPage() * this.pageSize(),
      this.data().length
    );
  });

  pages = computed(() => {
    const total = this.totalPages();

    return Array.from(
      { length: total },
      (_, index) => index + 1
    );
  });

  goToPage(page: number): void {
    this.currentPage.set(page);
  }

  previousPage(): void {
    if (this.currentPage() > 1) {
      this.currentPage.update(page => page - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage() < this.totalPages()) {
      this.currentPage.update(page => page + 1);
    }
  }
}

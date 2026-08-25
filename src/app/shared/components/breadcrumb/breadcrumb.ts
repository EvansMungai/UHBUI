import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-breadcrumb',
  styleUrl: './breadcrumb.css',
  templateUrl: './breadcrumb.html',
})
export class Breadcrumb {
  page = input.required<string>();
}

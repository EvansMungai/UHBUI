import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfound',
  imports: [],
  templateUrl: './notfound.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './notfound.component.css'
})
export class NotfoundComponent {
  private router = inject(Router);

  constructor() { }
  navigateBack() {
    this.router.navigate([this.router.url]);
  }
}

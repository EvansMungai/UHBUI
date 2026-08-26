import { Component, inject } from '@angular/core';
import { Theme } from '../../../core/services/theme';

@Component({
  imports: [],
  selector: 'app-theme-toggle',
  styleUrl: './theme-toggle.css',
  templateUrl: './theme-toggle.html',
})
export class ThemeToggle {
  readonly themeService = inject(Theme);
}

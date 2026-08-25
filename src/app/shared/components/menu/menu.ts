import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationSection } from '../../../core/interfaces/Menu';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  sections = input.required<NavigationSection[]>();
  navigate = output<void>();

  onNavigate(): void {
    this.navigate.emit();
  }
}

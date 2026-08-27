import { Component, inject, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationSection } from '../../../core/interfaces/Menu';
import { AuthService } from '../../../core/services/auth';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  private authService = inject(AuthService);
  sections = input.required<NavigationSection[]>();
  horizontal = input<boolean>(false);
  navigate = output<void>();

  onNavigate(): void {
    this.navigate.emit();
  }
  onLogOut(): void {
    this.authService.logout();
  }
}

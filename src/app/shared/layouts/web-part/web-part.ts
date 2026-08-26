import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { Menu } from '../../components/menu/menu';
import { NavigationSection } from '../../../core/interfaces/Menu';
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { MENU_CONFIGS } from '../../../core/interfaces/menu-config';

@Component({
  imports: [Breadcrumb, Menu, ThemeToggle, RouterOutlet],
  selector: 'app-web-part',
  styleUrl: './web-part.css',
  templateUrl: './web-part.html',
})
export class WebPart {
  mobileMenuOpen = signal<boolean>(false);

  private readonly route = inject(ActivatedRoute);
  readonly menuKey = this.route.snapshot.data['menu'] as string;
  readonly menuSections: NavigationSection[] = MENU_CONFIGS[this.menuKey]?.menuSections ?? [];
  readonly dropdownMenuSections: NavigationSection[] = MENU_CONFIGS[this.menuKey]?.dropdownMenuSections ?? [];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open)
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}

import { Component, effect, signal } from '@angular/core';
import { Breadcrumb } from "../../components/breadcrumb/breadcrumb";
import { Menu } from '../../components/menu/menu';
import { NavigationSection } from '../../../core/interfaces/Menu';

@Component({
  imports: [Breadcrumb, Menu],
  selector: 'app-web-part',
  styleUrl: './web-part.css',
  templateUrl: './web-part.html',
})
export class WebPart {
  mobileMenuOpen = signal<boolean>(false);
  darkMode = signal<boolean>(false);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.darkMode())
    })
  }

  menuSections: NavigationSection[] = [
    {
      title: 'Dashboards',
      items: [
        {
          label: 'E-commerce',
          link: '/dashboard/e-commerce',
        },
        {
          label: 'Project Management',
          link: '/dashboard/projects',
        },
        {
          label: 'CRM',
          link: '/dashboard/crm',
        },
      ],
    }];
  dropdownMenuSections: NavigationSection[] = [
    {
      title: '',
      items: [
        {
          label: 'My-account',
          link: '/my-account',
        },
        {
          label: 'Log out',
          link: '/my-account',
        }
      ],
    }];

  toggleTheme(): void {
    this.darkMode.update(dark => !dark);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open)
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}

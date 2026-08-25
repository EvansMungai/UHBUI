import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Menu } from '../menu/menu';
import { NavigationSection } from '../../../core/interfaces/Menu';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly mobileMenuOpen = signal(false);
    menuSections: NavigationSection[] = [
    {
      title: '',
      items: [
        {
          label: 'Contact',
          link: '/my-account',
        },
        {
          label: 'Log in',
          link: '/my-account',
        },
        {
          label: 'Sign up',
          link: '/my-account',
        }
      ],
    }];

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}

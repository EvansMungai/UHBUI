import { Component, effect, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationSection } from '../../../core/interfaces/Menu';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

@Component({
  imports: [RouterLink, ThemeToggle],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly mobileMenuOpen = signal<boolean>(false);  

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

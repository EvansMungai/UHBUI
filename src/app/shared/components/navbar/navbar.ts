import { Component, effect, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationSection } from '../../../core/interfaces/Menu';

@Component({
  imports: [RouterLink],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  readonly mobileMenuOpen = signal<boolean>(false);
  darkMode = signal<boolean>(false);

  constructor() {
    effect(() => {
      document.documentElement.classList.toggle('dark', this.darkMode())
    })
  }

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

  toggleTheme(): void {
    this.darkMode.update(dark => !dark);
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen.update(open => !open);
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}

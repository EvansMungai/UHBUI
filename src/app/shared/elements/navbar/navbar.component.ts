import { Component, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LinkService } from '../../../core/services/link.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  private router = inject(Router);
  private linkService = inject(LinkService);

  links: any[] = [];

  constructor() { }
  ngOnInit(): void {
    this.links = this.linkService.getLinks();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.links = this.linkService.getLinks());
  }
}

import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links: any[]= [];
  constructor(private router: Router, private linkService: LinkService){}
  ngOnInit(): void {
    this.links = this.linkService.getLinks();
    this.router.events.pipe(filter(event=> event instanceof NavigationEnd)).subscribe(()=> this.links = this.linkService.getLinks());
  }
}

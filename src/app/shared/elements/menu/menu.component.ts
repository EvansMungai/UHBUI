import { Component, Input, OnInit } from '@angular/core';
import { LinkService } from '../../../core/services/link.service';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { filter } from 'rxjs';
import { NavigationEnd, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  links: any[] = [];
  faQrcode = faQrcode;
  constructor(private router: Router, private linkService: LinkService) { }
  ngOnInit(): void {
    this.links = this.linkService.getLinks();
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(() => this.links = this.linkService.getLinks())
  }
}

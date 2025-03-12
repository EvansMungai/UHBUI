import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { AdminLinks, HomeLinks, HousekeeperLinks, MatronLinks, StudentLinks } from '../interfaces/mock-links';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  links: any[] = [];
  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      this.updateLinks(event.urlAfterRedirects);
    });
  }
  private updateLinks(url: string) {
    switch (url) {
      case '/uhb/student':
        this.links = StudentLinks;
        break;
      case '/uhb/student/register-student-details':
        this.links = StudentLinks;
        break;
      case '/uhb/student/booking':
        this.links = StudentLinks;
        break;
      case '/uhb/student/application-details':
        this.links = StudentLinks;
        break;
      case '/uhb/student/accommodation-details':
        this.links = StudentLinks;
        break;
      case '/uhb/student/user-details':
        this.links = StudentLinks;
        break;
      case '/uhb/housekeeper':
        this.links = HousekeeperLinks;
        break;
      case '/uhb/matron':
        this.links = MatronLinks;
        break;
      case '/uhb/admin':
        this.links = AdminLinks;
        break;
      default:
        this.links = HomeLinks;
        break;
    }
  }
  public getLinks() {
    return this.links;
  }
}

import { Component } from '@angular/core';
import { AdminLinks, HousekeeperLinks, HomeLinks, MatronLinks, StudentLinks } from '../../interfaces/mock-links';
import { Link } from '../../interfaces/links';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { faQrcode} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
 faQrcode = faQrcode;
 links: Link[] = HousekeeperLinks
}

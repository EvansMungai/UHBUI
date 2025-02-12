import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [NavbarComponent, MenuComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {

}

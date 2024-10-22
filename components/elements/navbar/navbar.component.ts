import { Component } from '@angular/core';
import { NavlinksComponent } from "./navlinks/navlinks.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavlinksComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  sidebarClass = "menu menu-sm dropdown-content bg-secondary rounded-box z-[1] mt-3 w-52 p-2 shadow";
  navbarClass = "menu menu-horizontal px-1";
}

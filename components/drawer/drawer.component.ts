import { Component } from '@angular/core';
import { MainComponent } from "../main/main.component";
import { SidebarComponent } from "../elements/sidebar/sidebar.component";

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [MainComponent, SidebarComponent],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  
}

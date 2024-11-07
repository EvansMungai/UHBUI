import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerComponent } from "../../components/drawer/drawer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhb';
}

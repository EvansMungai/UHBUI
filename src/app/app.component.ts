import { Component } from '@angular/core';
import { DrawerComponent } from "../../components/elements/drawer/drawer.component";


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

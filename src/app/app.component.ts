import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from "../../components/elements/hero/hero.component";
import { NavbarComponent } from "../../components/elements/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhb';
}

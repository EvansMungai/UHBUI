import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/elements/navbar/navbar.component";
import { HeroComponent } from "../../../components/elements/hero/hero.component";
import { FooterComponent } from "../../../components/elements/footer/footer.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, FooterComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}

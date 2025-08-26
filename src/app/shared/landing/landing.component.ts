import { Component } from '@angular/core';
import { NavbarComponent } from '../elements/navbar/navbar.component';
import { HeroComponent } from '../elements/hero/hero.component';
import { FooterComponent } from '../elements/footer/footer.component';

@Component({
    selector: 'app-landing',
    imports: [NavbarComponent, HeroComponent, FooterComponent],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.css'
})
export class LandingComponent {

}

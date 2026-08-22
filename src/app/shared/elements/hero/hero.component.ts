import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-hero',
    imports: [RouterModule],
    templateUrl: './hero.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './hero.component.css'
})
export class HeroComponent {

}

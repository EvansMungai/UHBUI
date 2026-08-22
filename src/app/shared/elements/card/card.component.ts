import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = "";
  @Input() baseStyles: string = '';
}

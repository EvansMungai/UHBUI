import { Component, contentChild, Input,TemplateRef } from '@angular/core';
import { NgTemplateOutlet} from '@angular/common';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-card',
  styleUrl: './card.css',
  templateUrl: './card.html',
})
export class Card {
  headerTemplate = contentChild<TemplateRef<any>>('headerTemplate');
  titleTemplate = contentChild<TemplateRef<any>>('titleTemplate');
  subtitleTemplate = contentChild<TemplateRef<any>>('subtitleTemplate');
  contentTemplate = contentChild<TemplateRef<any>>('contentTemplate');
  footerTemplate = contentChild<TemplateRef<any>>('footerTemplate');

  @Input() cardStyles!: string;
  @Input() header!: string;
  @Input() titleStyles!: string;
  @Input() subtitle!: string;
  @Input() subtitleStyles!: string;
  @Input() footer!: string;
  @Input() footerStyles!: string;

  get cardStyle(): string {
    const styles = 'block max-w-sm p-6 border border-default rounded-lg shadow-xs';
    return `${styles} ${this.cardStyles}`.trim();
  }
}

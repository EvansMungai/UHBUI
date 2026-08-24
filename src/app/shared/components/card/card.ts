import { Component, contentChild, input, Input,TemplateRef } from '@angular/core';
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

  cardStyles = input<string>();
  header = input<string>();
  titleStyles = input<string>();
  subtitle = input<string>();
  subtitleStyles = input<string>();
  footer = input<string>();
  footerStyles = input<string>();
  
  get cardStyle(): string {
    const styles = 'block max-w-sm p-6 border border-default rounded-lg shadow-xs';
    return `${styles} ${this.cardStyles}`.trim();
  }
}

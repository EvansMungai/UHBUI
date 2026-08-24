import { Component, computed, contentChild, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  imports: [NgTemplateOutlet],
  selector: 'app-toast',
  styleUrl: './toast.css',
  templateUrl: './toast.html',
})
export class Toast {
  position = input<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'>('top-right');
  outlined = input<boolean>(false);
  toastStyles = input<string>();
  summary = input<string>();
  detail = input<string>();

  headerTemplate = contentChild<TemplateRef<any>>('headerTemplate');

  get styles(): string {
    const defaultStyles = `fixed flex items-center p-4 rounded-lg shadow-xs`;
    return `${defaultStyles} ${this.toastPosition()}`.trim();
  }

  toastPosition = computed(() => {
    const positionMap = {
      'top-left': 'top-5 left-5',
      'top-right': 'top-5 right-5',
      'bottom-left': 'bottom-5 left-5',
      'bottom-right': 'bottom-5 right-5'
    };
    return positionMap[this.position()]
  })
}

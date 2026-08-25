import { Component, signal } from '@angular/core';
import { WebPart } from './shared/layouts/web-part/web-part';

@Component({
  imports: [WebPart],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('uhb');
}

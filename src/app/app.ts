import { Component, signal } from '@angular/core';
import { Hero } from './shared/layouts/hero/hero';

@Component({
  imports: [Hero],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html'
})
export class App {
  protected readonly title = signal('uhb');

}

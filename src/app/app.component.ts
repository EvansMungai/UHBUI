import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigninformComponent } from "../../components/elements/forms/signinform/signinform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SigninformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhb';
}

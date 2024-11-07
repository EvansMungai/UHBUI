import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SignupformComponent } from "../../components/elements/forms/signupform/signupform.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SignupformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'uhb';
}

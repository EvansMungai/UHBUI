import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-navlinks',
  standalone: true,
  imports: [],
  templateUrl: './navlinks.component.html',
  styleUrl: './navlinks.component.css'
})
export class NavlinksComponent {
  listOfLinks: string[] = ["Contact Us", "Sign Up", "Log In"];
  @Input({required: true}) class = "";
  @Input({transform: numberAttribute}) tabindex = 0;

}

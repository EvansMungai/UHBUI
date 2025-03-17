import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../../../../components/elements/button/button.component";

@Component({
  selector: 'change-role-form',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './change-role-form.component.html',
  styleUrl: './change-role-form.component.css'
})
export class ChangeRoleFormComponent {

}

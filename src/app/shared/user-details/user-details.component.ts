import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChangePasswordComponent } from "../change-password/change-password.component";

@Component({
    selector: 'app-user-details',
    imports: [CommonModule, ChangePasswordComponent],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  showChangePasswordForm: boolean = false;
  toggleChangePasswordForm(): boolean {
    return this.showChangePasswordForm = !this.showChangePasswordForm;
  }
}

import { Component, inject, input } from '@angular/core';
import { Card } from '../../components/card/card';
import { AuthService } from '../../../core/services/auth';

@Component({
  imports: [Card],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
  private readonly authService = inject(AuthService);
  username = this.authService.getUser()?.userName;
  roles = this.authService.getUser()?.roles;
}

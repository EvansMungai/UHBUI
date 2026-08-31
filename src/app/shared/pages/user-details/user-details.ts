import { Component } from '@angular/core';
import { Card } from '../../components/card/card';

@Component({
  imports: [Card],
  selector: 'app-user-details',
  styleUrl: './user-details.css',
  templateUrl: './user-details.html',
})
export class UserDetails {
}

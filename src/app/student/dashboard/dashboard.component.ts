import { Component } from '@angular/core';
import { CardComponent } from '../../../../components/elements/card/card.component';

@Component({
  selector: 'student-dashboard',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class StudentDashboardComponent {

}

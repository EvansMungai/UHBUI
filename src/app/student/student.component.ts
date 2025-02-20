import { Component } from '@angular/core';
import { DrawerComponent } from "../../../components/elements/drawer/drawer.component";
import { CardComponent } from "../../../components/elements/card/card.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [DrawerComponent, CardComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}

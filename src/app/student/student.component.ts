import { Component } from '@angular/core';
import { DrawerComponent } from "../../../components/elements/drawer/drawer.component";
import { StudentDashboardComponent } from "./dashboard/dashboard.component";

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [DrawerComponent,  StudentDashboardComponent],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {

}

import { Component } from '@angular/core';
import { DrawerComponent } from '../../../components/elements/drawer/drawer.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}

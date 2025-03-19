import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '../../../../components/elements/button/button.component';
import { Button } from '../../../../components/interfaces/button.interface';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent {
  
}

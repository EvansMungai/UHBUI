import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateService } from '../../../../components/services/state.service';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent {
  constructor(public stateService: StateService){}
}

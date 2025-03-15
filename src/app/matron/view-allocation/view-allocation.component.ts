import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StateService } from '../../../../components/services/state.service';

@Component({
  selector: 'app-view-allocation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './view-allocation.component.html',
  styleUrl: './view-allocation.component.css'
})
export class ViewAllocationComponent {
  constructor(public stateService: StateService){}
}

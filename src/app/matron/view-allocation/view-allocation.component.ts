import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from "../../../../components/elements/button/button.component";

@Component({
  selector: 'app-view-allocation',
  standalone: true,
  imports: [RouterModule, ButtonComponent],
  templateUrl: './view-allocation.component.html',
  styleUrl: './view-allocation.component.css'
})
export class ViewAllocationComponent {

}

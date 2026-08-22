import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-student',
    imports: [RouterModule],
    templateUrl: './student.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './student.component.css'
})
export class DashboardComponent {

}

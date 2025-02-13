import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentComponent } from './student/student.component';
import { HousekeeperComponent } from './housekeeper/housekeeper.component';
import { MatronComponent } from './matron/matron.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'student', component: StudentComponent },
    { path: 'housekeeper', component: HousekeeperComponent },
    { path: 'matron', component: MatronComponent }
];

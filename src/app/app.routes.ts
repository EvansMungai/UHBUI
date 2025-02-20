import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentComponent } from './student/student.component';
import { HousekeeperComponent } from './housekeeper/housekeeper.component';
import { MatronComponent } from './matron/matron.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './student/booking/booking.component';
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'student', component: StudentComponent },
    { path: 'housekeeper', component: HousekeeperComponent },
    { path: 'matron', component: MatronComponent },
    { path: 'admin', component: AdminComponent},
    { path: 'booking', component: BookingComponent},
    { path: '**', component:NotfoundComponent}
];

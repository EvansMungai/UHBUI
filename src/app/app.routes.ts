import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StudentComponent } from './student/student.component';
import { HousekeeperComponent } from './housekeeper/housekeeper.component';
import { MatronComponent } from './matron/matron.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './student/booking/booking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DrawerComponent } from '../../components/elements/drawer/drawer.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './student/application-details/application-details.component';
import { AccommodationDetialsComponent } from './student/accommodation-detials/accommodation-detials.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'uhb', redirectTo: 'uhb/student', pathMatch: 'full' },
    {
        path: 'uhb', component: DrawerComponent,
        children: [
            {
                path: 'student', component: StudentComponent, children: [
                    { path: '', component: StudentDashboardComponent },
                    { path: 'booking', component: BookingComponent },
                    { path: 'application-details', component: ApplicationDetailsComponent },
                    { path: 'accommodation-details', component: AccommodationDetialsComponent }
                ]
            },
            { path: 'housekeeper', component: HousekeeperComponent },
            { path: 'matron', component: MatronComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'booking', component: BookingComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];

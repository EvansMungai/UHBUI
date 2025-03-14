import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './student/student.component';
import { ReviewApplicationsComponent } from './housekeeper/review-applications/review-applications.component';
import { MatronComponent } from './matron/matron.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './student/booking/booking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DrawerComponent } from '../../components/elements/drawer/drawer.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './student/application-details/application-details.component';
import { AccommodationDetailsComponent } from './student/accommodation-details/accommodation-detials.component';
import { RegisterStudentDetailsComponent } from './student/register-student-details/register-student-details.component';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'uhb', redirectTo: 'uhb/student/register-student-details', pathMatch: 'full' },
    {
        path: 'uhb', component: DrawerComponent,
        children: [
            {
                path: 'student', component: DashboardComponent, children: [
                    { path: '', component: StudentDashboardComponent },
                    { path: 'register-student-details', component: RegisterStudentDetailsComponent },
                    { path: 'booking', component: BookingComponent },
                    { path: 'application-details', component: ApplicationDetailsComponent },
                    { path: 'accommodation-details', component: AccommodationDetailsComponent }
                ]
            },
            { path: 'housekeeper', component: DashboardComponent, children:[
                {path: '', component: ReviewApplicationsComponent}
            ] },
            { path: 'matron', component: MatronComponent },
            { path: 'admin', component: AdminComponent },
            { path: 'booking', component: BookingComponent }
        ]
    },
    { path: '**', component: NotfoundComponent }
];

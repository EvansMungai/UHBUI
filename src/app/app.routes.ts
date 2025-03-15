import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { DashboardComponent } from './student/student.component';
import { ReviewApplicationsComponent } from './housekeeper/review-applications/review-applications.component';
import { ReviewAllocationsComponent } from './matron/review-allocations/review-allocations.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './student/booking/booking.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DrawerComponent } from '../../components/elements/drawer/drawer.component';
import { StudentDashboardComponent } from './student/dashboard/dashboard.component';
import { ApplicationDetailsComponent } from './student/application-details/application-details.component';
import { AccommodationDetailsComponent } from './student/accommodation-details/accommodation-detials.component';
import { RegisterStudentDetailsComponent } from './student/register-student-details/register-student-details.component';
import { ViewAllocationComponent } from './matron/view-allocation/view-allocation.component';
import { ViewApplicationComponent } from './housekeeper/view-application/view-application.component';

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
            {
                path: 'housekeeper', component: DashboardComponent, children: [
                    { path: '', component: ReviewApplicationsComponent },
                    { path: 'view-application/:id', component: ViewApplicationComponent }
                ]
            },
            {
                path: 'matron', component: DashboardComponent, children: [
                    { path: '', component: ReviewAllocationsComponent },
                    { path: 'view-allocation/:id', component: ViewAllocationComponent },
                ]
            },
            { path: 'admin', component: AdminComponent },
        ]
    },
    { path: '**', component: NotfoundComponent }
];

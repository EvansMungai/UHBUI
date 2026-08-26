import { Routes } from '@angular/router';
import { Landing } from './shared/pages/landing/landing';
import { Auth } from './shared/pages/auth/auth';
import { WebPart } from './shared/layouts/web-part/web-part';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', component: Auth },
    {
        path: 'uhb', children: [
            {
                path: 'student', component: WebPart, children: [
                    { path: '', loadComponent: () => import('./shared/features/student/student-dashboard/student-dashboard').then(m => m.StudentDashboard) },
                    { path: 'register', loadComponent: () => import('./shared/features/student/student-registration/student-registration').then(m => m.StudentRegistration) },
                    { path: 'booking', loadComponent: () => import('./shared/features/student/booking/booking').then(m => m.Booking) },
                    { path: 'application-details', loadComponent: () => import('./shared/features/student/application-details/application-details').then(m => m.ApplicationDetails) },
                    { path: 'accommodation-details', loadComponent: () => import('./shared/features/student/accommodation-details/accommodation-details').then(m => m.AccommodationDetails) },                ]
            }
        ]
    },
];

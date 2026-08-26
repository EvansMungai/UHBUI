import { Routes } from '@angular/router';
import { Landing } from './shared/pages/landing/landing';
import { Auth } from './shared/pages/auth/auth';
import { WebPart } from './shared/layouts/web-part/web-part';
import { AccessDenied } from './shared/pages/access-denied/access-denied';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', component: Auth },
    {
        path: 'uhb', children: [
            {
                path: 'student', component: WebPart, data: { menu: 'student' }, children: [
                    { path: '', loadComponent: () => import('./shared/features/student/student-dashboard/student-dashboard').then(m => m.StudentDashboard) },
                    { path: 'register', loadComponent: () => import('./shared/features/student/student-registration/student-registration').then(m => m.StudentRegistration) },
                    { path: 'booking', loadComponent: () => import('./shared/features/student/booking/booking').then(m => m.Booking) },
                    { path: 'application-details', loadComponent: () => import('./shared/features/student/application-details/application-details').then(m => m.ApplicationDetails) },
                    { path: 'accommodation-details', loadComponent: () => import('./shared/features/student/accommodation-details/accommodation-details').then(m => m.AccommodationDetails) },
                ]
            },
            {
                path: 'housekeeper', component: WebPart, data: { menu: 'housekeeper' }, children: [
                    { path: '', loadComponent: () => import('./shared/features/housekeeper/review-applications/review-applications').then(m => m.ReviewApplications) },
                    { path: 'view-application', loadComponent: () => import('./shared/features/housekeeper/view-application/view-application').then(m => m.ViewApplication) },
                    { path: 'successful-applications', loadComponent: () => import('./shared/features/housekeeper/successful-applications/successful-applications').then(m => m.SuccessfulApplications) },
                ]
            },
            {
                path: 'matron', component: WebPart, data: { menu: 'matron' }, children: [
                    { path: '', loadComponent: () => import('./shared/features/matron/review-allocations/review-allocations').then(m => m.ReviewAllocations) },
                    { path: 'view-allocation', loadComponent: () => import('./shared/features/matron/view-allocation/view-allocation').then(m => m.ViewAllocation) },
                    { path: 'allocated-rooms', loadComponent: () => import('./shared/features/matron/rooms-allocated/rooms-allocated').then(m => m.RoomsAllocated) }
                ]
            }
        ]
    },
    { path: 'access-denied', component: AccessDenied }
];

import { Routes } from '@angular/router';
import { Landing } from './shared/pages/landing/landing';
import { Auth } from './shared/pages/auth/auth';
import { WebPart } from './shared/layouts/web-part/web-part';
import { AccessDenied } from './shared/pages/access-denied/access-denied';
import { NotFound } from './shared/pages/not-found/not-found';
import { roleGuard } from './core/guards/role-guard';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', component: Auth },
    { path: 'uhb', redirectTo: '', pathMatch: 'full' },
    {
        path: 'uhb', children: [
            {
                path: 'student', component: WebPart, data: { menu: 'student', breadcrumb: 'Dashboard', roles: ['Student'] }, canActivateChild: [roleGuard], children: [
                    { path: '', loadComponent: () => import('./shared/features/student/student-dashboard/student-dashboard').then(m => m.StudentDashboard) },
                    { path: 'register', data: { breadcrumb: 'Register' }, loadComponent: () => import('./shared/features/student/student-registration/student-registration').then(m => m.StudentRegistration) },
                    { path: 'booking', data: { breadcrumb: 'Booking' }, loadComponent: () => import('./shared/features/student/booking/booking').then(m => m.Booking) },
                    { path: 'application-details', data: { breadcrumb: 'Application-Details' }, loadComponent: () => import('./shared/features/student/application-details/application-details').then(m => m.ApplicationDetails) },
                    { path: 'accommodation-details', data: { breadcrumb: 'Accommodation-Details' }, loadComponent: () => import('./shared/features/student/accommodation-details/accommodation-details').then(m => m.AccommodationDetails) },
                    { path: 'my-account', data: { breadcrumb: 'Account-Details' }, loadComponent: () => import('./shared/pages/user-details/user-details').then(m => m.UserDetails) }
                ]
            },
            {
                path: 'housekeeper', component: WebPart, data: { menu: 'housekeeper', breadcrumb: 'Dashboard', roles: ['Housekeeper'] }, canActivateChild: [roleGuard], children: [
                    { path: '', loadComponent: () => import('./shared/features/housekeeper/review-applications/review-applications').then(m => m.ReviewApplications) },
                    { path: 'view-application/:id', data: { breadcrumb: 'View-Application' }, loadComponent: () => import('./shared/features/housekeeper/view-application/view-application').then(m => m.ViewApplication) },
                    { path: 'successful-applications', data: { breadcrumb: 'Successful-Applications' }, loadComponent: () => import('./shared/features/housekeeper/successful-applications/successful-applications').then(m => m.SuccessfulApplications) },
                    { path: 'my-account', data: { breadcrumb: 'Account-Details' }, loadComponent: () => import('./shared/pages/user-details/user-details').then(m => m.UserDetails) }
                ]
            },
            {
                path: 'matron', component: WebPart, data: { menu: 'matron', breadcrumb: 'Dashboard', roles: ['Matron'] }, canActivateChild: [roleGuard], children: [
                    { path: '', loadComponent: () => import('./shared/features/matron/review-allocations/review-allocations').then(m => m.ReviewAllocations) },
                    { path: 'view-allocation/:id', data: { breadcrumb: 'View-Allocation' }, loadComponent: () => import('./shared/features/matron/view-allocation/view-allocation').then(m => m.ViewAllocation) },
                    { path: 'allocated-rooms', data: { breadcrumb: 'Allocated-Rooms' }, loadComponent: () => import('./shared/features/matron/rooms-allocated/rooms-allocated').then(m => m.default) },
                    { path: 'my-account', data: { breadcrumb: 'Account-Details' }, loadComponent: () => import('./shared/pages/user-details/user-details').then(m => m.UserDetails) }
                ]
            },
            {
                path: 'admin', component: WebPart, data: { menu: 'admin', breadcrumb: 'Dashboard', roles: ['Admin'] }, canActivateChild: [roleGuard], children: [
                    { path: '', loadComponent: () => import('./shared/features/administrator/admin-dashboard/admin-dashboard').then(m => m.AdminDashboard) },
                    { path: 'resources', data: { breadcrumb: 'Resources' }, loadComponent: () => import('./shared/features/administrator/admin-register/admin-register').then(m => m.AdminRegister) },
                    { path: 'change-user-role', data: { breadcrumb: 'Change-User-Role' }, loadComponent: () => import('./shared/features/administrator/change-user-role/change-user-role').then(m => m.ChangeUserRole) },
                    { path: 'my-account', data: { breadcrumb: 'Account-Details' }, loadComponent: () => import('./shared/pages/user-details/user-details').then(m => m.UserDetails) }
                ]
            }
        ]
    },
    { path: 'access-denied', component: AccessDenied },
    { path: '**', component: NotFound }
];

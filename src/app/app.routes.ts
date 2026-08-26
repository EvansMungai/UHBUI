import { Routes } from '@angular/router';
import { Landing } from './shared/pages/landing/landing';
import { Auth } from './shared/pages/auth/auth';

export const routes: Routes = [
    { path: '', component: Landing },
    { path: 'auth', component: Auth }
];

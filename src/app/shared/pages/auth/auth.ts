import { Component, computed, inject, signal } from '@angular/core';
import { form, required, FormField, schema, minLength, submit, FormRoot, pattern } from '@angular/forms/signals';
import { Router, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../../../core/services/auth';
import { ToastService } from '../../../core/services/toast';
import { extractErrorMessage } from '../../../core/utils/ErrorHandling';

type AuthTab = 'signin' | 'signup';

@Component({
  imports: [RouterLink, FormField, FormRoot],
  selector: 'app-auth',
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {
  private readonly authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router)

  activeTab: AuthTab = 'signup';
  setTab(tab: AuthTab): void { this.activeTab = tab; };
  loading = signal<boolean>(false);

  signUpModel = signal({ userName: '', password: '' });
  signUpForm = form(this.signUpModel, {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        const credentials = field().value();
        console.log('Registering with the following credentials: ', credentials);
        try {
          const credentials = field().value();
          const response = await firstValueFrom(this.authService.register(credentials));
          this.authService.setToken(response.token);
          this.redirectBasedOnRole(response.user.roles[0]);
          this.toastService.add({
            severity: 'success',
            detail: 'Welcome To UHB',
            life: 3000
          })
        } catch (err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error',
            summary: error.message ?? error,
            detail: error.detail ?? '',
            life: 3000
          });
        } finally {
          this.loading.set(false);
        }
      }
    }
  })

  loginModel = signal({ userName: '', password: '' });
  loginForm = form(this.loginModel, schema(path => {
    required(path.userName, { message: 'Username is required' });
    required(path.password, { message: 'Password is required' });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        try {
          const credentials = field().value();
          const response = await firstValueFrom(this.authService.login(credentials));
          this.authService.setToken(response.token);
          this.redirectBasedOnRole(response.user.roles[0]);
          this.toastService.add({
            severity: 'success',
            summary: 'Welcome Back',
            life: 3000
          })
        } catch (err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error',
            summary: error.message ?? "",
            detail: error.detail ?? '',
            life: 3000
          });
        } finally {
          this.loading.set(false);
        }
      }
    }
  });
  passwordValue = computed(() => this.signUpForm.password().value());

  passwordRequirements = computed(() => {
    const password = this.passwordValue();

    return {
      minLength: password.length >= 6,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      digit: /[0-9]/.test(password),
      special: /[^a-zA-Z0-9]/.test(password)
    };
  });
  redirectBasedOnRole(role: string) {
    switch (role) {
      case 'Admin':
        this.router.navigate(['/uhb/admin']);
        break;
      case 'Housekeeper':
        this.router.navigate(['/uhb/housekeeper']);
        break;
      case 'Matron':
        this.router.navigate(['/uhb/matron']);
        break;
      default:
        this.router.navigate(['/uhb/student']);
        break;
    }
  }
}

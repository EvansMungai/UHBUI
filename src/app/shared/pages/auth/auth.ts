import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { form, required, FormField, schema, minLength, submit, FormRoot } from '@angular/forms/signals';
import { RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

type AuthTab = 'signin' | 'signup';

@Component({
  imports: [ReactiveFormsModule, RouterLink, FormField, FormRoot],
  selector: 'app-auth',
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {
  private readonly fb = inject(FormBuilder);

  activeTab: AuthTab = 'signup';
  setTab(tab: AuthTab): void { this.activeTab = tab; };

  loading = signal<boolean>(false);

  signUpModel = signal({ username: '', password: '' });
  signUpForm = form(this.signUpModel, schema(path => {
    required(path.username, { message: 'Username is required' });
    required(path.password, { message: 'Password is required' });
    minLength(path.password, 8, { message: 'Password must be at least 8 characters' });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        const credentials = field().value();
        console.log('Registering with the following credentials: ', credentials);
        // try {
        //   const credentials = field().value();
        //   await firstValueFrom(this.authService.register(credentials));
        //   console.log('Account registered successfully')
        // } catch (err) {
        //   console.error("Registration failed:", err);
        // } finally {
        //   this.loading.set(false);
        // }
      }
    }
  })

  loginModel = signal({ username: '', password: '' });
  loginForm = form(this.loginModel, schema(path => {
    required(path.username, { message: 'Username is required' });
    required(path.password, { message: 'Password is required' });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        const credentials = field().value();
        console.log('Logging in with the following credentials', credentials);
        // try {
        //   const credentials = field().value();
        //   await firstValueFrom(this.authService.register(credentials));
        //   console.log('Account registered successfully')
        // } catch (err) {
        //   console.error("Registration failed:", err);
        // } finally {
        //   this.loading.set(false);
        // }
      }
    }
  })

}

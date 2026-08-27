import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

type AuthTab = 'signin' | 'signup';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-auth',
  styleUrl: './auth.css',
  templateUrl: './auth.html',
})
export class Auth {
  private readonly fb = inject(FormBuilder);

  activeTab: AuthTab = 'signup';
  loading = signal<boolean>(false);

  readonly signInForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: false
  });

  readonly signUpForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  setTab(tab: AuthTab): void {
    this.activeTab = tab;
  };

  signIn(): void {
    if (this.signInForm.invalid) {
      this.signInForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const credentials = this.signInForm.getRawValue();
    console.log('Sign in:', credentials);

    // this.authService.signIn(credentials).subscribe({
    //   next: () => ...,
    //   error: () => ...,
    //   complete: () => this.loading = false,
    // });
  }

  signUp(): void {
    if (this.signUpForm.invalid) {
      this.signUpForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    const credentials = this.signUpForm.getRawValue();

    console.log('Sign up:', credentials);

    // this.authService.signUp(credentials).subscribe({
    //   next: () => ...,
    //   error: () => ...,
    //   complete: () => this.loading = false,
    // });
  }
}

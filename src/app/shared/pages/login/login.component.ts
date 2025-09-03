import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { SubmitButton } from '../../../core/interfaces/button.interface';
import { ButtonComponent } from '../../elements/button/button.component';
import { ToastComponent } from '../../elements/toast/toast.component';
import { UserService } from '../../../core/services/user.service';
import { showToast } from '../../utils/toastUtils';
import { extractErrorMessage } from '../../utils/errorHandling';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private userService = inject(UserService);

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    passwordHash: ['', Validators.required]
  })
  submitButtonProps: SubmitButton = {
    text: 'Submit',
    type: 'submit',
    size: 'lg',
    variant: 'secondary',
    formId: 'loginForm'
  };
  toastVisible = signal(false);
  toastStyles = signal('');
  alertStyles = signal('');
  alertMessage = signal('');

  onSubmit(): void {
    this.userService.login(this.loginForm.value).subscribe({
      next: (data) => {
        showToast('Welcome Back.', 'alert-success', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage);
        console.log(data);
      },
      error: err => {
        const errorMessage = extractErrorMessage(err);
        showToast(errorMessage, 'alert-error', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage);
      }
    })
  }
}

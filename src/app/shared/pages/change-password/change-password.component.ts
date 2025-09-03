import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { SubmitButton } from '../../../core/interfaces/button.interface';
import { ButtonComponent } from '../../elements/button/button.component';
import { ToastComponent } from '../../elements/toast/toast.component';
import { showToast } from '../../utils/toastUtils';

@Component({
  selector: 'app-change-password',
  imports: [ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  private fb = inject(FormBuilder);

  changePasswordForm: FormGroup;
  submitButtonProps: SubmitButton;
  toastVisible = signal(false);
  toastStyles = signal('');
  alertStyles = signal('');
  alertMessage = signal('');

  constructor() {
    const passwordMatchValidator = (control: AbstractControl): ValidationErrors | null => {
      const formGroup = control as FormGroup;
      const newPassword = formGroup.get('newPassword')?.value;
      const confirmPassword = formGroup.get('confirmPassword')?.value;

      return newPassword === confirmPassword ? null : { passwordsMismatch: true };
    };
    this.changePasswordForm = this.fb.group({
      currentPassword: ['', Validators.required],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/)]],
      confirmPassword: ['', Validators.required],
    });
    this.changePasswordForm.setValidators(passwordMatchValidator);
    this.submitButtonProps = {
      text: 'Change Password', type: 'submit', variant: 'secondary', formId: 'changePasswordForm'
    }
  }
  onSubmit(): void {
    if (this.changePasswordForm.valid) {
      console.log(this.changePasswordForm.value);
      showToast('Password changed successfully! 🔒', 'alert-success', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage);
    } else {
      console.log("Form invalid");
      showToast('Error: The form contains invalid or missing information. Please review and correct the highlighted fields before resubmitting', 'alert-error', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage);
    }
  }
}

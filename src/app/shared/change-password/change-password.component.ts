import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { SubmitButton } from '../../core/interfaces/button.interface';
import { ButtonComponent } from '../elements/button/button.component';
import { ToastComponent } from '../elements/toast/toast.component';

@Component({
    selector: 'app-change-password',
    imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
    templateUrl: './change-password.component.html',
    styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  submitButtonProps: SubmitButton;
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
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
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'Password changed successfully! 🔒';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log("Form invalid");
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-error';
      this.alertMessage = 'Error: The form contains invalid or missing information. Please review and correct the highlighted fields before resubmitting';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}

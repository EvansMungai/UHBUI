import { Component } from '@angular/core';
import { ButtonComponent } from '../../../../shared/elements/button/button.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitButton } from '../../../../core/interfaces/button.interface';
import { ToastComponent } from '../../../../shared/elements/toast/toast.component';

@Component({
  selector: 'rooms-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './rooms-registration-form.component.html',
  styleUrl: './rooms-registration-form.component.css'
})
export class RoomsRegistrationFormComponent {
  registerRoomForm: FormGroup;
  submitButtonProps: SubmitButton
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.registerRoomForm = this.fb.group({
      roomNo: ['', Validators.required],
      hostelNo: ['', Validators.required]
    })
    this.submitButtonProps = {
      text: 'Register', type: 'submit', variant: 'secondary', formId: 'registerRoomForm'
    }
  }
  onSubmit(): void {
    if (this.registerRoomForm.valid) {
      console.log(this.registerRoomForm.value);
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'Room details successfully registered! 🎉  ';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log("Form invalid");
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-error';
      this.alertMessage = 'Error: Room number is required. Please provide a valid room number to proceed.';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}

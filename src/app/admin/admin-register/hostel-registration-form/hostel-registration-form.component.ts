import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../../../components/elements/button/button.component";
import { SubmitButton } from '../../../../../components/interfaces/button.interface';
import { ToastComponent } from "../../../../../components/elements/toast/toast.component";

@Component({
  selector: 'hostel-registration-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './hostel-registration-form.component.html',
  styleUrl: './hostel-registration-form.component.css'
})
export class HostelRegistrationFormComponent {
  registerHostelForm: FormGroup;
  submitButtonProps: SubmitButton;
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.registerHostelForm = this.fb.group({
      hostelNo: ['', Validators.required],
      hostelName: ['', Validators.required],
      hostelCapacity: ['', Validators.required],
      hostelType: ['', Validators.required],
    })
    this.submitButtonProps = {
      text: 'submit', type: 'submit', variant: 'secondary', formId: 'registerHostelForm'
    }
  }
  onSubmit(): void {
    if (this.registerHostelForm.valid) {
      console.log(this.registerHostelForm.value);
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'Hostel Details successfully registered! 🎉  ';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log("Form invalid!");
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-error';
      this.alertMessage = 'Error: The form contains invalid or missing information. Please review and correct the highlighted fields before resubmitting.';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }

}

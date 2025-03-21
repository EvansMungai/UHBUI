import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../components/elements/button/button.component';
import { Button, SubmitButton } from '../../../../components/interfaces/button.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../../../components/elements/toast/toast.component';

@Component({
  selector: 'app-view-application',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent {
  reviewApplication: FormGroup;
  submitButtonProps: SubmitButton;
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.reviewApplication = this.fb.group({
      acceptApplication: ['', Validators.required],
      hostelName: ['']
    });
    this.submitButtonProps = {
      text: 'Review Application', type: 'submit', variant: "secondary", formId: 'reviewApplicationForm'
    }
  }
  onSubmit(): void {
    if (this.reviewApplication.valid) {
      console.log(this.reviewApplication.value);
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'You have successfully reviewed the application!';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log("Form invalid!");
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-error';
      this.alertMessage = 'Application review unsuccessful! Form is invalid!';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}

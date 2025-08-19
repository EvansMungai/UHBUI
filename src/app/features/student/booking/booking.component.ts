import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/elements/button/button.component';
import { SubmitButton } from '../../../core/interfaces/button.interface';
import { ToastComponent } from '../../../shared/elements/toast/toast.component';

@Component({
  selector: 'booking-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  bookingForm: FormGroup;
  submitButtonProps: SubmitButton;
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.bookingForm = this.fb.group({
      registrationNo: ['', [Validators.required, Validators.pattern('^[A-Z]\\d{3}-\\d{2}-\\d{4}/\\d{4}$')]],
      hostelName: ['', Validators.required],
      applicationPeriod: ['', Validators.required],
      isDisabled: ['', Validators.required],
      disabilityDetails: [''],
      accommodationBefore: ['', Validators.required],
      accommodationPeriod: [''],
      isSponsored: ['', Validators.required],
      sponsor: [''],
      receivesHelb: ['', Validators.required],
      helbAmount: [''],
      receivesBursary: ['', Validators.required],
      bursaryAmount: [''],
      workStudyBenefitsBefore: ['', Validators.required],
      workStudyPeriod: [''],
      specialExamsBefore: ['', Validators.required],
      specialExamsPeriod: [''],
      considerationReasons: ['', Validators.required]
    });
    this.submitButtonProps = {
      text: 'Submit', type: 'submit', variant: "secondary", formId: 'bookingForm'
    }
  }
  onSubmit(): void {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
      this.showToast = true;
      this.toastStyles = 'toast-bottom toast-end';
      this.alertStyles = 'alert-success'
      this.alertMessage = 'Your form has been submitted successfully!';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log('Form is invalid')
      this.showToast = true;
      this.toastStyles = 'toast-bottom toast-end';
      this.alertStyles = 'alert-error'
      this.alertMessage = 'Your form was not submitted!'
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}

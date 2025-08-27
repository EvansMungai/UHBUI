import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../shared/elements/button/button.component';
import { SubmitButton } from '../../../core/interfaces/button.interface';
import { ToastComponent } from '../../../shared/elements/toast/toast.component';

@Component({
  selector: 'app-view-allocation',
  imports: [RouterModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './view-allocation.component.html',
  styleUrl: './view-allocation.component.css'
})
export class ViewAllocationComponent {
  private fb = inject(FormBuilder);

  allocateRoomForm: FormGroup;
  submitButtonProps: SubmitButton
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor() {
    this.allocateRoomForm = this.fb.group({
      roomNo: ['', Validators.required]
    })
    this.submitButtonProps = {
      text: 'Allocate Room', type: 'submit', variant: 'secondary', formId: 'roomAllocationForm'
    }
  }
  onSubmit(): void {
    if (this.allocateRoomForm.valid) {
      console.log(this.allocateRoomForm.value);
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'Room successfully allocated to the applicant! 🎉  ';
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

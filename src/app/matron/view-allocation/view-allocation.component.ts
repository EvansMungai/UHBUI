import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ButtonComponent } from "../../../../components/elements/button/button.component";
import { SubmitButton } from '../../../../components/interfaces/button.interface';
import { ToastComponent } from '../../../../components/elements/toast/toast.component';

@Component({
  selector: 'app-view-allocation',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './view-allocation.component.html',
  styleUrl: './view-allocation.component.css'
})
export class ViewAllocationComponent {
  allocateRoomForm: FormGroup;
  submitButtonProps: SubmitButton
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
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

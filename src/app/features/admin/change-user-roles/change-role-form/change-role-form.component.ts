import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../../shared/elements/button/button.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitButton } from '../../../../core/interfaces/button.interface';
import { ToastComponent } from '../../../../shared/elements/toast/toast.component';

@Component({
    selector: 'change-role-form',
    imports: [RouterModule, ReactiveFormsModule, CommonModule, ButtonComponent, ToastComponent],
    templateUrl: './change-role-form.component.html',
    styleUrl: './change-role-form.component.css'
})
export class ChangeRoleFormComponent {
  changeUserRoleForm: FormGroup;
  submitButtonProps: SubmitButton
  showToast: boolean = false;
  toastStyles: string = '';
  alertStyles: string = '';
  alertMessage: string = '';

  constructor(private fb: FormBuilder) {
    this.changeUserRoleForm = this.fb.group({
      role: ['', Validators.required]
    })
    this.submitButtonProps = {
      text: 'Assign Role', type: 'submit', variant: 'secondary', formId: 'changeRoleForm'
    }
  }
  onSubmit(): void {
    if (this.changeUserRoleForm.valid) {
      console.log(this.changeUserRoleForm.value);
      this.showToast = true;
      this.toastStyles = 'toast-top toast-end';
      this.alertStyles = 'alert-success';
      this.alertMessage = 'Role successfully allocated to the user! 🎉  ';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    } else {
      console.log("Form invalid");
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

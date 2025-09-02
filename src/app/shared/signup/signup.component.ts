import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '../elements/button/button.component';
import { SubmitButton } from '../../core/interfaces/button.interface';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  private fb = inject(FormBuilder);

  signupForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  submitButtonProps: SubmitButton = {
    text: 'Submit',
    type: 'submit',
    size: 'lg',
    variant: 'secondary',
    formId: 'signupForm'
  };

  onSubmit(): void {
    console.log(this.signupForm.value);
  }
}

import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { SubmitButton } from '../../core/interfaces/button.interface';
import { ButtonComponent } from '../elements/button/button.component';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private fb = inject(FormBuilder);

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  })
  submitButtonProps: SubmitButton = {
    text: 'Submit',
    type: 'submit',
    size: 'lg',
    variant: 'secondary',
    formId: 'loginForm'
  };
  onSubmit(): void {
    console.log(this.loginForm.value);
  }
}

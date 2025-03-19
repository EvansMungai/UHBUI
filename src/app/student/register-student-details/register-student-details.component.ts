import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "../../../../components/elements/button/button.component";
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SubmitButton } from '../../../../components/interfaces/button.interface';

@Component({
  selector: 'app-register-student-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  templateUrl: './register-student-details.component.html',
  styleUrl: './register-student-details.component.css'
})
export class RegisterStudentDetailsComponent {
  studentProfileForm: FormGroup;
  submitButtonProps: SubmitButton;

  constructor(private fb: FormBuilder) {
    this.studentProfileForm = this.fb.group({
      registrationNo: ['', [Validators.required, Validators.pattern('^[A-Z]\\d{3}-\\d{2}-\\d{4}/\\d{4}$')]],
      surname: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      gender: ['', Validators.required]
    });
    this.submitButtonProps = {
      text: 'Submit', type: 'submit', variant: "secondary", formId: 'studentRegistrationForm'
    }
  }
  onSubmit(): void {
    if (this.studentProfileForm.valid) {
      console.log(this.studentProfileForm.value);
    } else {
      console.log('Form is invalid')
    }
  }
}

import { Component, inject, signal } from '@angular/core';
import { StudentData } from '../../../../core/models/student';
import { form, schema, FormRoot, FormField, required } from '@angular/forms/signals';
import { Student } from '../../../../core/services/student';
import { ToastService } from '../../../../core/services/toast';
import { extractErrorMessage } from '../../../../core/utils/ErrorHandling';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-student-registration',
  styleUrl: './student-registration.css',
  templateUrl: './student-registration.html',
})
export class StudentRegistration {
  private studentService = inject(Student);
  private toastService = inject(ToastService);
  private router = inject(Router);

  loading = signal<boolean>(false);
  registrationModel = signal<StudentData>({ regNo: '', surname: '', firstName: '', secondName: '', gender: '' });
  registrationForm = form(this.registrationModel, schema(path => {
    required(path.regNo, { message: "Registration number is required." });
    required(path.surname, { message: "Surname is required." });
    required(path.firstName, { message: "First Name is required." });
    required(path.secondName, { message: "Last Name is required." });
    required(path.gender, { message: "Gender is required." });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        try {
          const data = field().value();
          await firstValueFrom(this.studentService.createStudentDetails(data));
          this.router.navigate(['uhb/student'])
          this.toastService.add({
            severity: 'success',
            summary: 'You have successfully registered your details',
            life: 3000
          })
        } catch (err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error',
            summary: error.message ?? '',
            life: 3000
          })
        } finally {
          this.loading.set(false);
        }
      }
    }
  })
}

import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../shared/elements/button/button.component';
import { Button, SubmitButton } from '../../../core/interfaces/button.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../../shared/elements/toast/toast.component';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationData } from '../../../core/interfaces/applicationData';

@Component({
  selector: 'app-view-application',
  imports: [RouterModule, ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private applicationService = inject(ApplicationService);

  reviewApplication: FormGroup = this.fb.group({
    acceptApplication: ['', Validators.required],
    hostelName: ['']
  });
  readonly submitButtonProps: SubmitButton = {
    text: 'Review Application', type: 'submit', variant: "secondary", formId: 'reviewApplicationForm'
  };

  applicationDetails: ApplicationData | null = null;
  toastVisible = signal(false);
  toastStyles = signal('');
  alertStyles = signal('');
  alertMessage = signal('');

  ngOnInit(): void {
    const applicationId = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(applicationId)) {
      this.applicationService.getSpecificApplication(applicationId)
        .subscribe({
          next: (data) => {
            this.applicationDetails = data
            console.log(this.applicationDetails);
          },
          error: (err) => console.error('Error fetching application details:', err)
        });
    } else {
      console.error('Invalid application ID');
    }
  }
  onSubmit(): void {
    if (this.reviewApplication.valid) {
      console.log(this.reviewApplication.value);
      this.showToast('You have successfully reviewed the application!', 'alert-sucess');
    } else {
      console.log("Form invalid!");
      this.showToast('Application review was unsuccessful! Form is invalid!', 'alert-error');
    }
  }
  private showToast(message: string, style: string): void {
    this.toastVisible.set(true);
    this.toastStyles.set('toast-top toast-end');
    this.alertMessage.set(style);
    this.alertMessage.set(message);

    setTimeout(()=> this.toastVisible.set(false), 3000);
  }
}

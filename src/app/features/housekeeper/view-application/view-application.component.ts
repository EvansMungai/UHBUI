import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../../shared/elements/button/button.component';
import { Button, SubmitButton } from '../../../core/interfaces/button.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../../shared/elements/toast/toast.component';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationData } from '../../../core/interfaces/applicationData';

@Component({
    selector: 'app-view-application',
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
  applicationDetails: ApplicationData | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private applicationService: ApplicationService) {
    this.reviewApplication = this.fb.group({
      acceptApplication: ['', Validators.required],
      hostelName: ['']
    });
    this.submitButtonProps = {
      text: 'Review Application', type: 'submit', variant: "secondary", formId: 'reviewApplicationForm'
    }
  }
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

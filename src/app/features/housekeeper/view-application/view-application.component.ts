import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ButtonComponent } from '../../../shared/elements/button/button.component';
import { SubmitButton } from '../../../core/interfaces/button.interface';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastComponent } from '../../../shared/elements/toast/toast.component';
import { LoadingComponent } from '../../../shared/elements/loading/loading.component';
import { ApplicationService } from '../../../core/services/application.service';
import { ApplicationData } from '../../../core/interfaces/applicationData';
import { showToast } from '../../../shared/elements/toast/toastUtils';

@Component({
  selector: 'app-view-application',
  imports: [RouterModule, ReactiveFormsModule, ButtonComponent, ToastComponent, LoadingComponent],
  templateUrl: './view-application.component.html',
  styleUrl: './view-application.component.css'
})
export class ViewApplicationComponent implements OnInit {
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
  loadingStyles = 'loading-spinner loading-lg'

  readonly applicationDetails = signal<any | null>(null);
  toastVisible = signal(false);
  toastStyles = signal('');
  alertStyles = signal('');
  alertMessage = signal('');

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      const applicationId = Number(paramMap.get('id'));
      if(!isNaN(applicationId)){
        this.applicationService.getSpecificApplication(applicationId).subscribe({
          next: (data) => this.applicationDetails.set(data),
          error: (err) => console.error("Error fetching application details: ", err)
        })
      } else {
        console.error('Invalid application Id')
      }
    })
  }
  onSubmit(): void {
    if (this.reviewApplication.valid) {
      console.log(this.reviewApplication.value);
      showToast('You have successfully reviewed the application!', 'alert-success', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage)
    } else {
      showToast('Application review was unsuccessful! Form is invalid!', 'alert-error', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage)
    }
  }
}

import { httpResource } from '@angular/common/http';
import { Component, effect, inject, input, signal } from '@angular/core';
import { ApplicationData, ApplicationUpdateRequest } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { StudentData } from '../../../../core/models/student';
import { HostelData } from '../../../../core/models/hostel';
import { form, required, schema, FormField, FormRoot } from '@angular/forms/signals';
import { ToastService } from '../../../../core/services/toast';
import { Application } from '../../../../core/services/application';
import { firstValueFrom } from 'rxjs';
import { extractErrorMessage } from '../../../../core/utils/ErrorHandling';
import { Router } from '@angular/router';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-view-application',
  styleUrl: './view-application.css',
  templateUrl: './view-application.html',
})
export class ViewApplication {
  private toastService = inject(ToastService);
  private applicationService = inject(Application);
  private router = inject(Router);

  id = input.required<number>();
  loading = signal<boolean>(false);
  applicationResource = httpResource<ApplicationData>(() => {
    return {
      url: `${environment.apiUrl}/application/${this.id()}`,
      method: 'GET'
    }
  });
  applicationData = this.applicationResource.value;
  studentResource = httpResource<StudentData>(() => {
    const regNo = this.applicationResource.value()?.registrationNo;
    if (!regNo) return undefined;

    return {
      url: `${environment.apiUrl}/student`,
      method: 'GET',
      params: { id: encodeURIComponent(regNo) }
    }
  });
  studentData = this.studentResource.value;

  hostelResource = httpResource<HostelData[]>(() => {
    return {
      url: `${environment.apiUrl}/hostels`,
      method: 'GET'
    }
  });
  hostelData = this.hostelResource.value;
  reviewApplicationModel = signal<ApplicationUpdateRequest>({ status: '', preferredHostel: '' });
  reviewApplicationForm = form(this.reviewApplicationModel, schema(path => {
    required(path.status, { message: "Status is required." });
  }), {
    submission: {
      action: async (field) => {
        const data = field().value();
        try {
          this.loading.set(true);
          await firstValueFrom(this.applicationService.reviewApplication(this.id(), data));
          this.toastService.add({
            severity: 'success', 
            summary: 'Application has been reviewed.',
            life: 3000
          });        
        } catch (err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error', 
            summary: error.summary ?? error,
            detail: error.detail ?? '',
            life: 3000
          })
        } finally {
          this.loading.set(false);
          this.router.navigate(['uhb/housekeeper']) 
        }
      }
    }
  })
}

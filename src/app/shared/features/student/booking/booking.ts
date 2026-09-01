import { Component, inject, signal } from '@angular/core';
import { ApplicationData } from '../../../../core/models/application';
import { form, required, schema, FormRoot, FormField } from '@angular/forms/signals';
import { httpResource } from '@angular/common/http';
import { HostelData } from '../../../../core/models/hostel';
import { environment } from '../../../../../environments/environment';
import { Application } from '../../../../core/services/application';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '../../../../core/services/toast';
import { extractErrorMessage } from '../../../../core/utils/ErrorHandling';
import { Router } from '@angular/router';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-booking',
  styleUrl: './booking.css',
  templateUrl: './booking.html',
})
export class Booking {
  private applicationService = inject(Application);
  private toastService = inject(ToastService);
  private router = inject(Router);

  loading = signal<boolean>(false);
  bookingModel = signal<ApplicationData>({ applicationPeriod: '', registrationNo: '', preferredHostel: '', status: '', roomNo: '', disability: 'No', disabilityDetails: '', accommodatedBefore: 'No', accommodationPeriod: '', isSponsored: 'No' , sponsor: '', receivesHelb: 'No', helbAmount: '', receivedBursary: 'No', bursaryAmount: '', workStudyBenefitsBefore: 'No', workStudyPeriod: '', specialExamsOnFinancialGrounds: 'No', specialExamPeriod: '', reasonsForConsideration: '' });
  bookingForm = form(this.bookingModel, schema(path => {
    required(path.registrationNo, { message: "Registration number is required" });
    required(path.applicationPeriod, { message: "Application period is required" });
    // required(path.disability, { message: "Disibility value is required" });
    // required(path.accommodatedBefore, { message: "Accommodated before value is required" });
    // required(path.isSponsored, { message: "Is Sponsored value is required" });
    // required(path.receivesHelb, { message: "Receives Helb value is required" });
    // required(path.receivedBursary, { message: "Receives Bursary value is required" });
    // required(path.workStudyBenefitsBefore, { message: "Work Study Benefits Before value is required" });
    // required(path.specialExamsOnFinancialGrounds, { message: "Special Exam before value is required" });
    required(path.reasonsForConsideration, { message: "Reasons for Consideration is required" });
  }), {
    submission: {
      action: async (field) => {
        const data = field().value();
        try {
          this.loading.set(true);
          await firstValueFrom(this.applicationService.createApplication(data));
          this.toastService.add({
            severity: 'success',
            summary: 'You have successfully applied for hostel booking',
            life: 3000
          });
        } catch (err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error',
            summary: error.message ?? error,
            detail: error.detail ?? '',
            life: 3000
          })
        } finally {
          this.loading.set(false);
          this.router.navigate(['/uhb/student/application-details']);
        }
      }
    }
  });
  hostelResource = httpResource<HostelData[]>(() => {
    return {
      url: `${environment.apiUrl}/hostels`,
      method: 'GET'
    }
  });
  hostelData = this.hostelResource.value;
}

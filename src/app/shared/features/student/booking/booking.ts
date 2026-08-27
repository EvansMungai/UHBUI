import { Component, signal } from '@angular/core';
import { ApplicationData } from '../../../../core/models/application';
import { form, required, schema, FormRoot, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-booking',
  styleUrl: './booking.css',
  templateUrl: './booking.html',
})
export class Booking {
  loading = signal<boolean>(false);
  bookingModel = signal<ApplicationData>({ applicationPeriod: '', registrationNo: '', preferredHostel: '', status: '', roomNo: '', disability: false, disabilityDetails: '', accommodatedBefore: false, accommodationPeriod: '', isSponsored: false, sponsor: '', receivesHelb: false, helbAmount: '', receivedBursary: false, bursaryAmount: '', workStudyBenefitsBefore: false, workStudyPeriod: '', specialExamsOnFinancialGrounds: false, specialExamPeriod: '', reasonsForConsideration: '' });
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

      }
    }
  })
}

import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'booking-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
  registrationNO = new FormControl('');
  hostelName = new FormControl('');
  applicationPeriod = new FormControl('');
  disability = new FormControl(false);
  disabilityDetails = new FormControl('');
  accommodatedBefore = new FormControl(false);
  accommodationDetails = new FormControl('');
  sponsoredBefore = new FormControl(false);
  sponsorDetails = new FormControl('')
  helbBefore = new FormControl(false);
  helbAmount = new FormControl('');
  bursaryBefore = new FormControl(false);
  bursaryAmount = new FormControl('');
  workStudyBefore = new FormControl(false);
  workStudyPeriod = new FormControl('');
  deferredBefore = new FormControl(false);
  deferredPeriod = new FormControl('');
  considerationReasons = new FormControl('');
}

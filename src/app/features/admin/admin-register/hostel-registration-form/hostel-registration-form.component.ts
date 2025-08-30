import { Component, inject, signal } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ButtonComponent } from '../../../../shared/elements/button/button.component';
import { SubmitButton } from '../../../../core/interfaces/button.interface';
import { ToastComponent } from '../../../../shared/elements/toast/toast.component';
import { showToast } from '../../../../shared/elements/toast/toastUtils';
import { HostelService } from '../../../../core/services/hostel.service';
import { RoomService} from '../../../../core/services/room.service';

@Component({
  selector: 'hostel-registration-form',
  imports: [ReactiveFormsModule, ButtonComponent, ToastComponent],
  templateUrl: './hostel-registration-form.component.html',
  styleUrl: './hostel-registration-form.component.css'
})
export class HostelRegistrationFormComponent {
  private fb = inject(FormBuilder);
  private hostelService = inject(HostelService);

  registerHostelForm: FormGroup = this.fb.group({
    hostelNo: ['', Validators.required],
    hostelName: ['', Validators.required],
    capacity: ['', Validators.required],
    type: ['', Validators.required],
  });
  submitButtonProps: SubmitButton = {
    text: 'submit', type: 'submit', variant: 'secondary', formId: 'registerHostelForm'
  };
  toastVisible = signal(false);
  toastStyles = signal('');
  alertStyles = signal('');
  alertMessage = signal('');

  onSubmit(): void {
    if (this.registerHostelForm.valid) {
      const data = this.registerHostelForm.value; console.log(data);
      this.hostelService.createHostel(data).subscribe({
        next: data => showToast('Hostel details successfully registered! 🎉  ', 'alert-success', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage),
        error: err => showToast(`Error: ${err} in creating`, 'alert-error', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage)
      });
    } else {
      console.log("Form invalid!");
      showToast('Error: The form contains invalid or missing information. Please review and correct the highlighted fields before resubmitting.', 'alert-error', this.toastVisible, this.toastStyles, this.alertStyles, this.alertMessage);
    }
  }
}

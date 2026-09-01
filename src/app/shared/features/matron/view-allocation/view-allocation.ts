import { httpResource } from '@angular/common/http';
import { Component, inject, input, signal } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { AllocateRoomRequest, ApplicationData } from '../../../../core/models/application';
import { TableColumn } from '../../../../core/interfaces/Table';
import { RoomData } from '../../../../core/models/hostel';
import { form, FormField, FormRoot, required, schema } from "@angular/forms/signals";
import { Application } from '../../../../core/services/application';
import { ToastService } from '../../../../core/services/toast';
import { firstValueFrom } from 'rxjs';
import { extractErrorMessage } from '../../../../core/utils/ErrorHandling';
import { Router } from '@angular/router';

@Component({
  imports: [FormField, FormRoot],
  selector: 'app-view-allocation',
  styleUrl: './view-allocation.css',
  templateUrl: './view-allocation.html',
})
export class ViewAllocation {
  private applicationService = inject(Application);
  private toastService = inject(ToastService);
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

  roomResource = httpResource<RoomData[]>(() => {
    return {
      url: `${environment.apiUrl}/rooms`,
      method: 'GET'
    }
  });
  roomData = this.roomResource.value;

  reviewAllocationModel = signal<AllocateRoomRequest>({roomNo: ''});
  reviewAllocationForm = form(this.reviewAllocationModel, schema(path => required(path.roomNo, {message: "Room Number is required."})), {
    submission: {
      action: async (field) => {
        const data = field().value();
        try{
          this.loading.set(true);
          await firstValueFrom(this.applicationService.allocateRoomToApplicant(this.id(), data));
          this.toastService.add({
            severity: 'success',
            summary: 'You have allocated the room to the applicant',
            life: 3000
          });
        } catch(err) {
          const error = extractErrorMessage(err);
          this.toastService.add({
            severity: 'error',
            summary: error.summary ?? error,
            detail: error.detail ?? '',
            life: 3000
          })
        } finally {
          this.loading.set(false);
          this.router.navigate(['uhb/matron']);
        }
      }
    }
  })
}

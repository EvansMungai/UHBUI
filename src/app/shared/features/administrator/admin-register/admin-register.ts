import { Component, inject, signal } from '@angular/core';
import { Card } from "../../../components/card/card";
import { form, FormRoot, required, schema, FormField, min } from "@angular/forms/signals";
import { HostelData, RoomData } from '../../../../core/models/hostel';
import { Resources } from '../../../../core/services/resources';
import { firstValueFrom } from 'rxjs';
import { ToastService } from '../../../../core/services/toast';
import { extractErrorMessage } from '../../../../core/utils/ErrorHandling';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Component({
  imports: [Card, FormRoot, FormField],
  selector: 'app-admin-register',
  styleUrl: './admin-register.css',
  templateUrl: './admin-register.html',
})
export class AdminRegister {
  private resourceService = inject(Resources);
  private toastService = inject(ToastService);
  loading = signal<boolean>(false);
  registerHostelVisibility = signal<boolean>(true);
  registerRoomVisibility = signal<boolean>(true);

  hostelResource = httpResource<HostelData[]>(() => {
    return {
      url: `${environment.apiUrl}/hostels`,
      method: 'GET'
    }
  });
  hostelData = this.hostelResource.value;

  hostelRegistrationModel = signal<HostelData>({ hostelNo: '', hostelName: '', capacity: 0, type: 'Male Hostel' });
  hostelRegistrationForm = form(this.hostelRegistrationModel, schema(path => {
    required(path.hostelNo, { message: "Hostel number is required." });
    required(path.hostelName, { message: "Hostel name is required." });
    required(path.capacity, { message: "Capacity is required." });
    min(path.capacity, 1, { message: "Capacity should be greater than 0" });
    required(path.type, { message: "Hostel type is required." });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        const data = field().value();
        try {
          await firstValueFrom(this.resourceService.createHostel(data));
          this.toastService.add({
            severity: 'success',
            summary: 'Hostel Details successfully registered',
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
        }
      }
    }
  })
  roomRegistrationModel = signal<RoomData>({ roomNo: '', hostelNo: '' });
  roomRegistrationForm = form(this.roomRegistrationModel, schema(path => {
    required(path.hostelNo, { message: "Hostel Number is required." });
    required(path.roomNo, { message: "Room Number is required." });
  }), {
    submission: {
      action: async (field) => {
        this.loading.set(true);
        const data = field().value()
        try {
          await firstValueFrom(this.resourceService.createRoom(data));
          this.toastService.add({
            severity: 'success',
            summary: 'Room details created',
            life: 3000
          })
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
        }
      }
    }
  })
}

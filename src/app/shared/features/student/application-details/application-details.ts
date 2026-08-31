import { Component, computed, inject } from '@angular/core';
import { Card } from '../../../components/card/card';
import { HttpErrorResponse, httpResource } from '@angular/common/http';
import { ApplicationData } from '../../../../core/models/application';
import { AuthService } from '../../../../core/services/auth';
import { environment } from '../../../../../environments/environment';

@Component({
  imports: [Card],
  selector: 'app-application-details',
  styleUrl: './application-details.css',
  templateUrl: './application-details.html',
})
export class ApplicationDetails {
  private authService = inject(AuthService);
  applicationResource = httpResource<ApplicationData[]>(() => {
    const regNo = this.authService.getUser()?.regNo;
    if (!regNo) return undefined;

    return {
      url: `${environment.apiUrl}/user-applications`,
      method: 'GET',
      params: { id: encodeURIComponent(regNo) }
    }
  });
  applicationData = this.applicationResource.value;
  firstApplication = computed(() => this.applicationData()?.[0]);

  isNotFoundError(error: Error | null): boolean {
    return error instanceof HttpErrorResponse && error.status === 404;
  }
}

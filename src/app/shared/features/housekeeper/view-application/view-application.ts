import { httpResource } from '@angular/common/http';
import { Component, effect, input } from '@angular/core';
import { ApplicationData } from '../../../../core/models/application';
import { environment } from '../../../../../environments/environment';
import { StudentData } from '../../../../core/models/student';
import { HostelData } from '../../../../core/models/hostel';

@Component({
  imports: [],
  selector: 'app-view-application',
  styleUrl: './view-application.css',
  templateUrl: './view-application.html',
})
export class ViewApplication {
  id = input.required<number>();
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
}

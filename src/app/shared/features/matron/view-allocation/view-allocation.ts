import { httpResource } from '@angular/common/http';
import { Component, input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { ApplicationData } from '../../../../core/models/application';
import { TableColumn } from '../../../../core/Table';

@Component({
  imports: [],
  selector: 'app-view-allocation',
  styleUrl: './view-allocation.css',
  templateUrl: './view-allocation.html',
})
export class ViewAllocation {
  id = input.required<number>();
  applicationResource = httpResource<ApplicationData>(() => {
    return {
      url: `${environment.apiUrl}/application/${this.id()}`,
      method: 'GET'
    }
  });
  applicationData = this.applicationResource.value;
}

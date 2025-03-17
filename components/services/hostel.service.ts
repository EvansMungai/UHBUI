import { Injectable } from '@angular/core';
import { HostelData } from '../interfaces/hostelData';
import { HostelInfo } from '../interfaces/mock_hostelData';

@Injectable({
  providedIn: 'root'
})
export class HostelService {
  protected hostelInfoList: HostelData[] = HostelInfo;
  constructor() { }
  getHostelsData(): HostelData[]{
    return this.hostelInfoList;
  }
}

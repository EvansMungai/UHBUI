import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  _applicationsVisibility: boolean = false;
  constructor() { }
  get applicationsVisibility(): boolean {
    return this._applicationsVisibility;
  }
  set toggleApplicationsVisibility(value: boolean){
    this._applicationsVisibility = value;
  }
}

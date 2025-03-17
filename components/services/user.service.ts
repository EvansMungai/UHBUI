import { Injectable } from '@angular/core';
import { UserDetails } from '../interfaces/userData';
import { UserInfo } from '../interfaces/mock_studentData';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  protected UserInfoList: UserDetails[] = UserInfo
  constructor() { }
  getUsersData() {
    return this.UserInfoList;
  }
}

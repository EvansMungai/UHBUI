import { Injectable } from '@angular/core';
import { RoomData } from '../interfaces/roomData';
import { RoomInfo } from '../interfaces/mock_roomData';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  protected roomInfoList: RoomData[] = RoomInfo;
  constructor() { }
  getRoomsData(){
    return this.roomInfoList;
  }
}

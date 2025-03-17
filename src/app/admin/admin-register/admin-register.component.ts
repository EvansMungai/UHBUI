import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { HostelRegistrationFormComponent } from "./hostel-registration-form/hostel-registration-form.component";
import { RoomsRegistrationFormComponent } from "./rooms-registration-form/rooms-registration-form.component";
import { TableComponent } from "../../../../components/elements/table/table.component";
import { HostelService } from '../../../../components/services/hostel.service';
import { RoomService } from '../../../../components/services/room.service';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, CardComponent, HostelRegistrationFormComponent, RoomsRegistrationFormComponent, TableComponent],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent {
  registerHostelVisibility: boolean = false;
  registerRoomVisibility: boolean = false;
  hostelsData: any[] = [];
  roomsData: any[] = [];
  constructor(private hostelService: HostelService, private roomService: RoomService) {
    this.hostelsData = this.hostelService.getHostelsData();
    this.roomsData = this.roomService.getRoomsData();
  }

  toggleRegisterHostelVisibility() {
    return this.registerHostelVisibility = !this.registerHostelVisibility;
  }
  toggleRegisterRoomVisibility() {
    return this.registerRoomVisibility = !this.registerRoomVisibility;
  }
}

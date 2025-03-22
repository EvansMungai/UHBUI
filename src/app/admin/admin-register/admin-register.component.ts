import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { HostelRegistrationFormComponent } from "./hostel-registration-form/hostel-registration-form.component";
import { RoomsRegistrationFormComponent } from "./rooms-registration-form/rooms-registration-form.component";
import { TableComponent } from "../../../../components/elements/table/table.component";
import { HostelService } from '../../../../components/services/hostel.service';
import { RoomService } from '../../../../components/services/room.service';
import { ActionButton } from '../../../../components/interfaces/button.interface';
import { ButtonComponent } from "../../../../components/elements/button/button.component";
import { TableColumn } from '../../../../components/interfaces/table.interface';

@Component({
  selector: 'app-admin-register',
  standalone: true,
  imports: [CommonModule, CardComponent, HostelRegistrationFormComponent, RoomsRegistrationFormComponent, TableComponent, ButtonComponent],
  templateUrl: './admin-register.component.html',
  styleUrl: './admin-register.component.css'
})
export class AdminRegisterComponent implements OnInit {
  registerHostelVisibility: boolean = false;
  registerRoomVisibility: boolean = false;
  hostelsData: any[] = [];
  roomsData: any[] = [];
  hostelColumns: TableColumn[] = [
    { key: 'HostelName', header: 'Hostel Name' },
    { key: 'HostelCapacity', header: 'Hostel Capacity' },
    { key: 'HostelType', header: 'Hostel Type' }
  ];
  roomColumns: TableColumn[] = [
    { key: 'roomNo', header: 'Room Number' },
    { key: 'hostelNo', header: 'Hostel Number' }
  ];
  loading: boolean = true;
  error: boolean = false;
  errorMessage: string = '';

  constructor(private hostelService: HostelService, private roomService: RoomService) {
    this.hostelsData = this.hostelService.getHostelsData();
  }
  ngOnInit(): void {
    this.loadRoomsData();
  }

  loadRoomsData() {
    this.loading = true;
    this.error = false;

    this.roomService.getRoomsData().subscribe({
      next: (data) => {
        this.roomsData = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error fetching rooms data:', err);
        this.error = true;
        this.errorMessage = 'Failed to load rooms data. Please try again later.';
        this.loading = false;
      }
    })
  }

  registerHostelButton(): ActionButton {
    return {
      text: 'Register Hostel',
      variant: 'secondary',
      type: 'button',
      size: 'sm',
      action: () => this.toggleRegisterHostelVisibility()
    }
  }
  registerRoomButton(): ActionButton {
    return {
      text: 'Register Room',
      variant: 'secondary',
      type: 'button',
      size: 'sm',
      action: () => this.toggleRegisterRoomVisibility()
    }
  }

  toggleRegisterHostelVisibility() {
    return this.registerHostelVisibility = !this.registerHostelVisibility;
  }
  toggleRegisterRoomVisibility() {
    return this.registerRoomVisibility = !this.registerRoomVisibility;
  }
}

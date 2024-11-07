import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  items = [
    {
      routelink: 'Hostel List',
      icon: 'fa-solid fa-building',
      label: 'Hostel List'
    },
    {
      routelink: 'roomsList',
      icon: 'fa-solid fa-book',
      label: 'Rooms List'
    },
    {
      routelink: 'studentsList',
      icon: 'fa-regular fa-user',
      label: 'Student List'
    },
    {
      routelink: 'usersList',
      icon: 'fa-solid fa-user',
      label: 'Users List'
    },
    {
      routelink: 'userDetails',
      icon: 'fa-solid fa-circle-info',
      label: 'User Details'
    },
    {
      routelink: 'Logout',
      icon: 'fa-solid fa-gear',
      label: 'Log Out'
    },
  ]
}

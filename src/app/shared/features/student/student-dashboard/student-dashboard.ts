import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { NavigationSection } from '../../../../core/interfaces/Menu';

@Component({
  imports: [Card],
  selector: 'app-student-dashboard',
  styleUrl: './student-dashboard.css',
  templateUrl: './student-dashboard.html',
})
export class StudentDashboard {
  menuSections: NavigationSection[] = [
    {
      title: 'Dashboards',
      items: [
        {
          label: 'E-commerce',
          link: '/dashboard/e-commerce',
        },
        {
          label: 'Project Management',
          link: '/dashboard/projects',
        },
        {
          label: 'CRM',
          link: '/dashboard/crm',
        },
      ],
    }];
  dropdownMenuSections: NavigationSection[] = [
    {
      title: '',
      items: [
        {
          label: 'My-account',
          link: '/my-account',
        },
        {
          label: 'Log out',
          link: '/my-account',
        }
      ],
    }];
}

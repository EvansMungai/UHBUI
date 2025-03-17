import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "../../../../components/elements/card/card.component";
import { UserDetails } from '../../../../components/interfaces/userData';
import { UserService } from '../../../../components/services/user.service';
import { TableComponent } from "../../../../components/elements/table/table.component";
import { ChangeRoleFormComponent } from "./change-role-form/change-role-form.component";


@Component({
  selector: 'app-change-user-roles',
  standalone: true,
  imports: [CommonModule, CardComponent, TableComponent, ChangeRoleFormComponent],
  templateUrl: './change-user-roles.component.html',
  styleUrl: './change-user-roles.component.css'
})
export class ChangeUserRolesComponent {
  tableData: any[] = [];
  changeRoleFormVisibility: boolean = true;
  constructor(private userService: UserService) {
    this.tableData = this.userService.getUsersData();
  }

}

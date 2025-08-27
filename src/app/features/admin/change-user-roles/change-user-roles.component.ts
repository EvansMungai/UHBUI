import { Component, inject } from '@angular/core';

import { CardComponent } from '../../../shared/elements/card/card.component';
import { UserDetails } from '../../../core/interfaces/userData';
import { UserService } from '../../../core/services/user.service';
import { TableComponent } from '../../../shared/elements/table/table.component';
import { ChangeRoleFormComponent } from "./change-role-form/change-role-form.component";
import { TableAction, TableColumn } from '../../../core/interfaces/table.interface';


@Component({
  selector: 'app-change-user-roles',
  imports: [CardComponent, TableComponent, ChangeRoleFormComponent],
  templateUrl: './change-user-roles.component.html',
  styleUrl: './change-user-roles.component.css'
})
export class ChangeUserRolesComponent {
  private userService = inject(UserService);
  tableData: any[] = [];
  tableColumns: TableColumn[] = [{ key: 'Username', header: "Username" }, { key: 'Role', header: 'Role' }];
  tableActions: TableAction[] = [{ buttonProps: { text: 'Change Role', type: 'button', variant: 'secondary', size: 'sm', action: () => this.toggleChangeRoleFormVisibility() } }]
  changeRoleFormVisibility: boolean = false;

  constructor() {
    this.tableData = this.userService.getUsersData();
  }
  toggleChangeRoleFormVisibility(): void {
    this.changeRoleFormVisibility = !this.changeRoleFormVisibility;
  }

}

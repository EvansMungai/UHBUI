import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { httpResource } from '@angular/common/http';
import { UserData } from '../../../../core/models/user';
import { environment } from '../../../../../environments/environment';
import { TableColumn } from '../../../../core/interfaces/Table';
import { Table } from '../../../components/table/table';

@Component({
  imports: [Card, Table],
  selector: 'app-change-user-role',
  styleUrl: './change-user-role.css',
  templateUrl: './change-user-role.html',
})
export class ChangeUserRole {
  userResource = httpResource<UserData[]>(() => {
    return {
      url: `${environment.apiUrl}/users`,
      method: 'GET'
    }
  })
  userData = this.userResource.value;
  userColumns: TableColumn<UserData>[] = [
    { key: 'userName', label: 'Username' },
    { key: 'role', label: 'Role' }
  ]
  
}

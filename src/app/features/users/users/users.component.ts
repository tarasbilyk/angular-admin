import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import { IUser } from 'src/app/shared/interfaces/user.interface';
import { UsersService } from 'src/app/shared/services/users.service';
import { usersDataMock } from 'src/testing/mocks/usersDataMock';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements AfterViewInit {

  displayedColumns: string[] = ['name', 'email', 'updatedAt', 'active'];
  dataSource = new MatTableDataSource<IUser>(usersDataMock);


  constructor(
    private usersService: UsersService,
  ) {
  }

  ngAfterViewInit() {
    this.usersService.currentUser.next(this.dataSource.data[this.dataSource.data.length - 1]);
  }

}

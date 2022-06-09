import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(
    private userService : UserService
  ) { }

  usersData: any;

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.usersData = this.userService.getUsers()
  }

}

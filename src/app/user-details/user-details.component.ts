import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users: any = [];
  thumbs: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe((data) => {
      this.users = data;
    });
  }

}

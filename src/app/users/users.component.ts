import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUsers()
    .subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
  }

}

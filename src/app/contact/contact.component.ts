import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
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

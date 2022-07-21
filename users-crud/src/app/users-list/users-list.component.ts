import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import  data from '../model/data.json';


@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {
  users: User[] = data;
  selectedUser?: User;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(user: User): void {
     this.selectedUser = user;
   }

}

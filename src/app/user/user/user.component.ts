import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  constructor() {}
  showAddUser: boolean = false;
  showUserList: boolean = true;
  isUpdate: boolean = false;

  users: Array<User> = [];
  currentUser: User = {};
  ngOnInit(): void {
    this.AddDummyUsers();
  }

  OnAddUserClick() {
    this.showAddUser = true;
    this.showUserList = false;
    this.isUpdate = false;
    this.currentUser = {};
  }

  AddDummyUsers() {
    for (let i = 0; i < 25; i++) {
      const newUser: User = {
        Id: i,
        FirstName: 'User ' + i,
        LastName: 'Name ' + i,
        Email: 'user' + i + '@gmail.com',
      };
      this.users.push(newUser);
    }
  }

  AddUser(newUser: User) {
    const isUserExists = this.users.some((x) => x.Id === newUser.Id);
    if (isUserExists) {
      const userIndex = this.users.indexOf(newUser);
      this.users[userIndex] = newUser;
    } else {
      newUser.Id = this.users.length;
      this.users.push(newUser);
    }
    this.showAddUser = false;
    this.showUserList = true;
  }

  ShowUserList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddUser = false;
      this.showUserList = true;
    }
  }

  UpdateUser(user: User) {
    this.currentUser = user;
    this.showAddUser = true;
    this.showUserList = false;
    this.isUpdate = true;
  }
  DeleteUser(user: User) {
    const userIndex = this.users.indexOf(user);
    this.users.splice(userIndex, 1);
  }
}

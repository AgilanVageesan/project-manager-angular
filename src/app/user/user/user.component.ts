import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/common/common-data.service";
import { User } from "../user";
import { UserService } from "../user.service";
@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"],
})
export class UserComponent implements OnInit {
  constructor(
    private _commonDataService: CommonDataService,
    private _userService: UserService
  ) {}
  showAddUser: boolean = false;
  showUserList: boolean = true;
  isUpdate: boolean = false;

  users: Array<User> = [];
  currentUser: User = {};
  ngOnInit(): void {
    this.AddDummyUsers();
    this._commonDataService.UserDataModule.push(...this.users);
    this.GetAllUsers();
  }

  GetAllUsers() {
    this._userService.getAll().subscribe((data: User[]) => {
      this.users = data;
    });
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
        FirstName: "User " + i,
        LastName: "Name " + i,
        Email: "user" + i + "@gmail.com",
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
    this._userService.create(newUser).subscribe((res) => {
      console.log("Project created!");
    });
  }

  ShowUserList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddUser = false;
      this.showUserList = true;
    }
  }
  GetProject(id: number) {
    this._userService.getById(id).subscribe((data: User) => {
      this.currentUser = data;
    });
  }

  UpdateUser(user: User) {
    this.currentUser = user;
    this.showAddUser = true;
    this.showUserList = false;
    this.isUpdate = true;
  }
  DeleteUser(user: User) {
    if (user.Id) {
      const ProjectIndex = this.users.indexOf(user);
      this.users.splice(ProjectIndex, 1);
      this._userService.delete(user.Id).subscribe((res) => {
        console.log("User created!");
      });
    }
  }
}

import { Component, OnInit, Output, EventEmitter ,Input} from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  @Input() newUser: User = {};
  @Input() isUpdate: boolean = false;

  @Output() newUserEvent = new EventEmitter<User>();
  @Output() isSubmit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  AddNewUser(value: User) {
    this.newUserEvent.emit(value);
  }
  CancelAddUser(){
    this.isSubmit.emit(false);
  }
}

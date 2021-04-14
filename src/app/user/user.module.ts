import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [CommonModule, FormsModule],
})
export class UserModule {}

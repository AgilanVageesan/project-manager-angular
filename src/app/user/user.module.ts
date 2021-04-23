import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { FormsModule } from '@angular/forms';
import { CommonDataService } from '../common/common-data.service';

@NgModule({
  declarations: [UserComponent, AddUserComponent],
  imports: [CommonModule, FormsModule],
  providers:[CommonDataService]
})
export class UserModule {}

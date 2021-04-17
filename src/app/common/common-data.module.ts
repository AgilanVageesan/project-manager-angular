import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonDataService } from './common-data.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [CommonDataService]
})
export class CommonDataModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project/project.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddProjectComponent } from './add-project/add-project.component';

@NgModule({
  imports: [CommonModule,BrowserModule, FormsModule],
  declarations: [ProjectComponent,AddProjectComponent],
})
export class ProjectModule {}

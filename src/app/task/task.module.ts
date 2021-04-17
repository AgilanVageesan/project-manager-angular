import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TaskComponent } from "./task/task.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AddTaskComponent } from "./add-task/add-task.component";
import { ProjectModule } from "../project/project.module";
import { HttpClientModule } from "@angular/common/http";
import { CommonDataService } from "../common/common-data.service";

@NgModule({
  declarations: [TaskComponent, AddTaskComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ProjectModule,
    HttpClientModule,
  ],
  providers: [CommonDataService],
})
export class TaskModule {}

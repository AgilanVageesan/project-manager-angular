import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Status } from "../status";
import { Task } from "../task";

@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html",
  styleUrls: ["./add-task.component.css"],
})
export class AddTaskComponent implements OnInit {
  @Input() newTask: Task = {};
  @Input() isUpdate: boolean = false;
  @Input() projectDataList: Array<any> = [];
  @Input() userDataList: Array<any> = [];
  // public status=Status;
  @Output() newTaskEvent = new EventEmitter<Task>();
  @Output() isSubmit = new EventEmitter<boolean>();
  statusList=[{Id:1,State:"Started"},{Id:2,State:"InProgress"},{Id:3,State:"Completed"}]
  constructor() {
   
  }
  ngOnInit(): void {
    console.log(this.projectDataList)
  }
  AddNewTask(value: Task) {
    this.newTaskEvent.emit(value);
  }
  UpdateTask(project:string,user:string,status:string,task:Task){
    let currentTask:Task={
      Id:task.Id,
      Project:project,
      AssignedToUser:user,
      Detail:task.Detail,
      Status:status,
      CreatedOn:task.CreatedOn
    }
    this.newTaskEvent.emit(currentTask);

  }
  CancelAddTask() {
    this.isSubmit.emit(false);
  }
}

import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
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

  @Output() newTaskEvent = new EventEmitter<Task>();
  @Output() isSubmit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.projectDataList)
  }
  AddNewTask(value: Task) {
    this.newTaskEvent.emit(value);
  }
  CancelAddTask() {
    this.isSubmit.emit(false);
  }
}

import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/common/common-data.service";
import { Task } from "../task";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  constructor(private _commonDataService:CommonDataService) {
    // this._commonDataService.ProjectDataModule.subscribe(o => {
    //   this.projectsList.push(o);
    // });
    this.projectsList=this._commonDataService.ProjectDataModule
    console.log(this.projectsList)
  }

  showAddTask: boolean = false;
  showTaskList: boolean = true;
  isUpdate: boolean = false;
  projectsList: Array<any> = [];
  tasks: Array<Task> = [];
  currentTask: Task = {};
  ngOnInit(): void {
    this.AddDummyTasks();
  }

  OnAddTaskClick() {
    this.showAddTask = true;
    this.showTaskList = false;
    this.isUpdate = false;
    this.currentTask = {};
  }

  AddDummyTasks() {
    var today = new Date();
    var date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + " " + time;
    for (let i = 0; i < 25; i++) {
      const newTask: Task = {
        Id: i,
        Project: "Project " + i,
        Detail: "details about task " + i,
        CreatedOn: dateTime,
      };
      this.tasks.push(newTask);
    }
  }

  AddTask(newTask: Task) {
    const isTaskExists = this.tasks.some((x) => x.Id === newTask.Id);
    if (isTaskExists) {
      const TaskIndex = this.tasks.indexOf(newTask);
      this.tasks[TaskIndex] = newTask;
    } else {
      newTask.Id = this.tasks.length;
      newTask.CreatedOn = new Date().toDateString();
      this.tasks.push(newTask);
    }
    this.showAddTask = false;
    this.showTaskList = true;
  }

  ShowTaskList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddTask = false;
      this.showTaskList = true;
    }
  }

  UpdateTask(Task: Task) {
    this.currentTask = Task;
    this.showAddTask = true;
    this.showTaskList = false;
    this.isUpdate = true;
  }
  DeleteTask(Task: Task) {
    const TaskIndex = this.tasks.indexOf(Task);
    this.tasks.splice(TaskIndex, 1);
  }
}

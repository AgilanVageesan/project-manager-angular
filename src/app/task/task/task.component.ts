import { Component, OnInit } from "@angular/core";
import { CommonDataService } from "src/app/common/common-data.service";
import { Task } from "../task";
import { TaskService } from "../task.service";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  constructor(
    private _commonDataService: CommonDataService,
    private _taskService: TaskService
  ) {
    this.projectsList = this._commonDataService.ProjectDataModule;
    this.usersList = this._commonDataService.UserDataModule;
  }

  showAddTask: boolean = false;
  showTaskList: boolean = true;
  isUpdate: boolean = false;
  projectsList: Array<any> = [];
  usersList: Array<any> = [];

  tasks: Array<Task> = [];
  currentTask: Task = {};
  ngOnInit(): void {
    this.AddDummyTasks();
    this.GetAllTasks();
  }
  GetAllTasks() {
    this._taskService.getAll().subscribe((data: Task[]) => {
      this.tasks = data;
    });
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
        Project: "Task " + i,
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
    this._taskService.create(newTask).subscribe((res) => {
      console.log("Task created!");
    });
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
    if (Task.Id) {
      const TaskIndex = this.tasks.indexOf(Task);
      this.tasks.splice(TaskIndex, 1);
      this._taskService.delete(Task.Id).subscribe((res) => {
        console.log("Product created!");
      });
    }
  }
}

import { Component, OnInit } from "@angular/core";
import { Project } from "../project";
import { AddProjectComponent } from "../add-project/add-project.component";
import { CommonDataService } from "src/app/common/common-data.service";
import { ProjectService } from "../project.service";
import { Route, Router } from "@angular/router";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  constructor(
    private _commonDataService: CommonDataService,
    private _projectService: ProjectService,
  ) {
  }

  showAddProject: boolean = false;
  showProjectList: boolean = true;
  isUpdate: boolean = false;

  projects: Array<Project> = [];
  currentProject: Project = {};
  ngOnInit(): void {
    this.AddDummyProjects();
    this._commonDataService.ProjectDataModule.push(...this.projects);
    this.GetAllProjects()
  }

  GetAllProjects() {
    this._projectService.getAll().subscribe((data: Project[]) => {
      this.projects = data;
    });
  }

  OnAddProjectClick() {
    this.showAddProject = true;
    this.showProjectList = false;
    this.isUpdate = false;
    this.currentProject = {};
  }

  AddDummyProjects() {
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
      const newProject: Project = {
        Id: i,
        Name: "Project " + i,
        Detail: "details about project " + i,
        CreatedOn: dateTime,
      };
      this.projects.push(newProject);
    }
  }

  AddProject(newProject: Project) {
    const isProjectExists = this.projects.some((x) => x.Id === newProject.Id);
    if (isProjectExists) {
      const ProjectIndex = this.projects.indexOf(newProject);
      this.projects[ProjectIndex] = newProject;
    } else {
      newProject.Id = this.projects.length;
      newProject.CreatedOn = new Date().toDateString();
      this.projects.push(newProject);
    }
    this.showAddProject = false;
    this.showProjectList = true;
    this._projectService.create(newProject).subscribe((res) => {
      console.log("Project created!");
    });
  }

  ShowProjectList(isSubmit: boolean) {
    if (!isSubmit) {
      this.showAddProject = false;
      this.showProjectList = true;
    }
  }
  GetProject(id: number) {
    this._projectService.getById(id).subscribe((data: Project) => {
      this.currentProject = data;
    });
  }

  UpdateProject(Project: Project) {
    this.currentProject = Project;
    this.showAddProject = true;
    this.showProjectList = false;
    this.isUpdate = true;
  }
  DeleteProject(Project: Project) {
    if (Project.Id) {
      const ProjectIndex = this.projects.indexOf(Project);
      this.projects.splice(ProjectIndex, 1);
      this._projectService.delete(Project.Id).subscribe((res) => {
        console.log("Product created!");
      });
    }
  }
}

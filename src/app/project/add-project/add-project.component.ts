import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '../project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
})
export class AddProjectComponent implements OnInit {
  @Input() newProject: Project = {};
  @Input() isUpdate: boolean = false;

  @Output() newProjectEvent = new EventEmitter<Project>();
  @Output() isSubmit = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
  AddNewProject(value: Project) {
    this.newProjectEvent.emit(value);
  }
  CancelAddProject(){
    this.isSubmit.emit(false);
  }
}

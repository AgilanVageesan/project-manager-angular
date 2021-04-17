import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Project } from "../project/project";
@Injectable()
export class CommonDataService {
  SharingData: Subject<any> = new Subject<any>();
  ProjectDataModule: Array<Project> = [];
  UserDataModule: Subject<any> = new Subject<any>();
  constructor() {}
}

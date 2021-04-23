import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Project } from "../project/project";
import { User } from "../user/user";
@Injectable()
export class CommonDataService {
  SharingData: Subject<any> = new Subject<any>();
  ProjectDataModule: Array<Project> = [];
  UserDataModule: Array<User> = [];
  constructor() {}
}
 
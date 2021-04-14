import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectComponent } from './project/project/project.component';
import { TaskComponent } from './task/task/task.component';
import { UserComponent } from './user/user/user.component';

const routes: Routes = [
  { path: 'project', component: ProjectComponent },
  { path: 'task', component: TaskComponent },
  { path: 'user', component: UserComponent },
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

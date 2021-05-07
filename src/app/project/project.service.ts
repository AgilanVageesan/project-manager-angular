import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(project: any): Observable<Project> {
    return this.httpClient.post<Project>(this.apiServer + '/projects/', JSON.stringify(project), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.apiServer + '/projects/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiServer + '/projects/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, project: any): Observable<Project> {
    return this.httpClient.put<Project>(this.apiServer + '/projects/' + id, JSON.stringify(project), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<Project>(this.apiServer + '/projects/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
     let errorMessage = '';
     if(error.error instanceof ErrorEvent) {
       errorMessage = error.error.message;
     } else {
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
  }
}

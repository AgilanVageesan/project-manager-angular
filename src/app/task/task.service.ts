import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {  throwError } from 'rxjs';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiServer = "http://localhost:3000";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient) { }

  create(task: any): Observable<Task> {
    return this.httpClient.post<Task>(this.apiServer + '/tasks/', JSON.stringify(task), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
  getById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(this.apiServer + '/tasks/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiServer + '/tasks/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id: number, task: any): Observable<Task> {
    return this.httpClient.put<Task>(this.apiServer + '/tasks/' + id, JSON.stringify(task), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<Task>(this.apiServer + '/tasks/' + id, this.httpOptions)
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

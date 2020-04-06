import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError,retry} from "rxjs/operators";
import{ Student } from '../studentlist/student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  
  constructor(private httpclient : HttpClient) { }
 
  getstudentlist() : Observable<Student[]>{
    console.log("service called ...!")
    const headers = new HttpHeaders()
  .set("X-CustomHeader", "custom header value");
    let handleError:any = "not working";
    return this.httpclient.get<Student[]>("http://localhost:3000/student",{headers})
    .pipe(
      retry(2),
      catchError(handleError)
    );
  }

  poststudent(stud:Student): Observable<Student>{
    return this.httpclient.post<Student>("http://localhost:3000/student",stud);
  }
}

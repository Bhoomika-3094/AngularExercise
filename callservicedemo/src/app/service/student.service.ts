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
    return this.httpclient.get<Student[]>("http://localhost:3000/student")
    // .pipe(
    //   retry(2),
    //   catchError(handleError)
    // );
  }

  poststudent(stud:Student): Observable<Student>{
    return this.httpclient.post<Student>("http://localhost:3000/student",stud);
  }

  deletestudent(id:number) : Observable<void>{
    return this.httpclient.delete<void>("http://localhost:3000/student"+"/"+id);
  }
  getBatchById(id:number) : Observable<Student>{
    return this.httpclient.get<Student>("http://localhost:3000/student"+"/"+id);
  }

}

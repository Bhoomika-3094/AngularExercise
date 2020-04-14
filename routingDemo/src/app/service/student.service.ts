import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { from, Observable } from 'rxjs';
import { Student } from '../studentlist/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpclient : HttpClient) { }

  getstudentlist():Observable<Student[]>{
    return this.httpclient.get<Student[]>('http://localhost:3000/student');
  }

  poststudentlist(student : Student):Observable<Student>{
    return this.httpclient.post<Student>('http://localhost:3000/student',student);
  }

  deletestudentlist(id : number):Observable<Student>{
    return this.httpclient.delete<Student>('http://localhost:3000/student'+"/"+id);
  }
  getBatchById(id  :number) : Observable<Student>{
    return this.httpclient.get<Student>("http://localhost:3000/student"+"/"+id);
  }
  update(student : Student) : Observable<Student>{
    return this.httpclient.put<Student>("http://localhost:3000/student"+"/"+student.id,student);
  }

}

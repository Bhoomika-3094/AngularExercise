import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import { Student } from "../studentlist/student.model";
import {StudentbodyComponent} from "../studentbody/studentbody.component";
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist : Student[] = [];
 
  constructor( private studentservice : StudentService) { }

  ngOnInit() {
    this.studentservice.getstudentlist().subscribe(
      (student) => {
        console.log(student)
        this.studentlist = student;
      },
      (error)=>{
        console.log(error);
      }
      )
  };
 
  
  }

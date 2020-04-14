import { Component, OnInit } from '@angular/core';
import {StudentService} from '../service/student.service';
import { Student } from "../studentlist/student.model";
import {StudentbodyComponent} from "../studentbody/studentbody.component";
import { from } from 'rxjs';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist : Student[] = [];
 
  constructor( private studentservice : StudentService, private router : Router) { }

  ngOnInit() {
    this.fetchedval();
  };
  fetchedval(){
    this.studentservice.getstudentlist().subscribe(
      (student) => {
        console.log(student)
        this.studentlist = student;
      },
      (error)=>{
        console.log(error);
      }
      )
  }
  delete(id:number){
    // alert(id);
    this.studentservice.deletestudent(id).subscribe(
      (data) =>{
        this.fetchedval();
      }
    )
  }
  edit(id: number){
    // alert(id);
    this.router.navigate(['/studentedit', id]);  
  }
 }

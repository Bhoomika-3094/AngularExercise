import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../service/student.service';
import { Student } from "../studentlist/student.model";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-studentform',
  templateUrl: './studentform.component.html',
  styleUrls: ['./studentform.component.css']
})
export class StudentformComponent implements OnInit {
  studentform: FormGroup;
  studentid : number;
  details: string;
  message: string;
  sending = false;
  constructor(private formBuilder : FormBuilder, private activatedRoute : ActivatedRoute, private service : StudentService, private router : Router , private location : Location) { }

  ngOnInit() {
    this.studentenlistform();
    this.activatedRoute.params.subscribe(
      (param)=>{
        // alert(param.id);
        this.studentid = param.id;
        alert(this.studentid);
        this.setBatchEntryFormValues();
      }
    )
  }
  setBatchEntryFormValues(){
    this.service.getBatchById(this.studentid).subscribe(
      (data : Student)=>{
        this.studentform.setValue(data);
      }
    )
  }
  studentenlistform():void{
    this.studentform = this.formBuilder.group(
      {
        id : [''],
        studentname : [''],
        className : ['']
      }
    )
  }
  save():void{
    let stud : Student = this.studentform.value;
    console.log(stud);
    this.service.poststudentlist(stud).subscribe(
     
      (data : Student) =>{
        console.log(data);
        this.router.navigate(['admin/studentlist']);
      }
    )
    
  }
  update():void{
    let stud : Student = this.studentform.value;
    this.service.update(stud).subscribe(
      (data : Student) =>{
        alert("Student list update with id:" + stud.id);
        this.router.navigate(['admin/studentlist']);
        this.save();
      }
    )
  }
  back():void{
    this.location.back();
  }
}

import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from './student.model';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {

  studentlist : Student[] =[];
  constructor(private location : Location,private router : Router, private service : StudentService) { }

  ngOnInit() {
    // this.router.navigate(['/sigin']);
    this. getstudent();
  }
  back() : void{
    this.location.back();
   }
   edit(id:number){
    // alert(id);
    this.router.navigate(['admin/studentform',id]);
   
   }
   getstudent() : void{
      this.service.getstudentlist().subscribe(
        (data) =>{
          console.log(data);
          this.studentlist = data;
        }
      )
   }
   add(){
     this.router.navigate(['admin/studentadd']);
   }
   delete(id:number){
    this.service.deletestudentlist(id).subscribe(
      (data)=>{
        this.getstudent();
      }
    )
   }
  // forward(){
  //   console.log("hii");
  //   this.location.forward();
  // }

}

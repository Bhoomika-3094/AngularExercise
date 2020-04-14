import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm, FormGroup ,FormBuilder} from '@angular/forms';
import {StudentService} from '../service/student.service';
import { Student } from "../studentlist/student.model";
import { ActivatedRoute} from '@angular/router';
import { Router } from "@angular/router";

@Component({
  selector: 'app-studentbody',
  templateUrl: './studentbody.component.html',
  styleUrls: ['./studentbody.component.css']
})
export class StudentbodyComponent implements OnInit {
 getid: number = 4;
 getarray : Student[] = [];
  constructor(private formBuilder : FormBuilder, private studentservice : StudentService, private router:Router, private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    // this.activatedRoute.params.subscribe(
    //   (param)=>{
    //     alert(param);
    //   }
    // )

  }
  
  save(frm : NgForm){
    let getval : Student = frm.value;
    // console.log(getval);
    this.studentservice.poststudent(getval).subscribe(
      (data: Student) => {
        // this.getarray.push(data);
        // console.log(this.getarray);
        // console.log(data);
        frm.setValue({
          studentname : '',
          className : ''
        });
       
        // this.getid = data.id;
      }
    );
}

}

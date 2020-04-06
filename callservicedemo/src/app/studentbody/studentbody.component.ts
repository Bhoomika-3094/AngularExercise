import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import {StudentService} from '../service/student.service';
import { Student } from "../studentlist/student.model";

@Component({
  selector: 'app-studentbody',
  templateUrl: './studentbody.component.html',
  styleUrls: ['./studentbody.component.css']
})
export class StudentbodyComponent implements OnInit {

  constructor( private studentservice : StudentService) { }

  ngOnInit() {
  }
  save(frm : NgForm){
    let getval : Student = frm.value;
    console.log(getval);
    this.studentservice.poststudent(getval).subscribe(
      (data: Student) => {
        console.log(data);
      }
    );
}

}

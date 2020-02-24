import { Component, OnInit } from '@angular/core';
import {Result} from '../result/result.model'
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  marksheet : Result[] = [];
  totalmarks:number;
  recievedmarks:number;
  percentage:number;
  constructor() { }

  ngOnInit() {
    let sub1 : Result= new Result("Gujrati",100,80);
    let sub2 : Result= new Result("English",100,90);
    let sub3 : Result= new Result("Maths",100,70);
    let sub4 : Result= new Result("Chemestry",100,85);
    let sub5 : Result= new Result("Science",100,95);
    this.marksheet.push(sub1);
    this.marksheet.push(sub2);
    this.marksheet.push(sub3);
    this.marksheet.push(sub4);
    this.marksheet.push(sub5);
    this.totalmarks = sub1.mark+sub2.mark+sub3.mark+sub4.mark+sub5.mark;
    this.recievedmarks=sub1.passingmark+sub2.passingmark+sub3.passingmark+sub4.passingmark+sub5.passingmark;
    this.percentage=  Math.floor(this.recievedmarks/this.totalmarks * 100);
  }
 
}

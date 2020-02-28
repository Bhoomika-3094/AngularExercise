import { Component, OnInit } from '@angular/core';
import { Employee }  from './employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  headerpart:string[] = ["Employee Name","Emplayee Designation","Employee Salary","Action"];
  employeelist : Employee[]= [];
  getindex:any[]=[];
  deleted:any;
  hideshow:boolean= false;
  getresult:string ="fail";
  color:string = "info";
  constructor() { }

  ngOnInit() {
    let employee1 = new Employee("bhoomika","Developer",50000);
    let employee2 = new Employee("milan","Developer",1000000);
    this.employeelist.push(employee1);
    this.employeelist.push(employee2);
  }

  getname(i:any){
  //alert(i);
  this.getresult="seletcted";
  this.hideshow = true;
  this.color="success";
  let gotvalue=this.employeelist[i];
  this.getindex.push(gotvalue);
  }

  delete(index:any){
    this.getresult="deleted";
    this.color="danger";
    this.getindex.splice(index,1);
    if(this.getindex.length==0){
     this.hideshow = false;
     this.getresult ="fail";
     this.color="info";
    }
    
  }


  

}

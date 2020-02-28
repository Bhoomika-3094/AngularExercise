import { Component, OnInit } from '@angular/core';
import { Employee }  from './employee.model';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  headerpart:string[] = ["Employee Name","Emplayee Designation","Employee Salary"];
  employeelist : Employee[]= [];
  getindex:any[]=[];
  deleted:any;
  hideshow:string ="hide"

  constructor() { }

  ngOnInit() {
    let employee1 = new Employee("bhoomika","Developer",50000);
    let employee2 = new Employee("milan","Developer",1000000);
    this.employeelist.push(employee1);
    this.employeelist.push(employee2);
  }

  getname(i:any){
  //alert(i);
  this.hideshow ="show";
  let gotvalue=this.employeelist[i];
  this.getindex.push(gotvalue);
  }

  delete(index:any){
    this.getindex.splice(index,1);
  
  }


}

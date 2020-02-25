import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model'

@Component({
  selector: 'app-employelist',
  templateUrl: './employelist.component.html',
  styleUrls: ['./employelist.component.css']
})
export class EmployelistComponent implements OnInit {

  headername : string[]=["Employee Id","Employee Name","Employee Salary"];
  empinfo : Employee[] = [];

  constructor() { }

  ngOnInit() {
    let employee1 = new Employee(1,"bhoomika",40000);
    let employee2 = new Employee(2,"milan",50000);
    let employee3 = new Employee(3,"parth",60000);
    let employee4 = new Employee(4,"swati",100000);
  this.empinfo.push(employee1);
  this.empinfo.push(employee2);
  this.empinfo.push(employee3);
  this.empinfo.push(employee4);
  }

}

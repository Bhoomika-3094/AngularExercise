import { Injectable } from '@angular/core';
import  { Employee } from "./employee.model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  
  constructor() {}
 ngOnInit(){
  
 }
  getemployeelist(){ 
   // const employeelist : Employee[] = [];
    //const emp1 : Employee = new Employee(1,"bhoomika","Gujarat");
    //employeelist.push(emp1);
    console.log("get employee list");
    return [{
              "id" : 1,
              "name" : "bhoomika",
              "city" : "Gujrat",
          }];
 
  }
}

import { Component, OnInit} from '@angular/core';
import { Employee } from "../employee-list/employee.model";
import { EmployeeService } from "../employee-list/employee.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
 public employee =[];
 
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    this.employee = this.employeeService.getemployeelist();
  }

}

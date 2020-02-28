import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Employee } from '../employeelist/employee.model';

@Component({
  selector: 'app-mygridoutputexample',
  templateUrl: './mygridoutputexample.component.html',
  styleUrls: ['./mygridoutputexample.component.css']
})
export class MygridoutputexampleComponent implements OnInit {

  @Input()
  headerlist:string[] =[];
  @Input()
  employeelist:any[] =[];
  @Output()
  getvalue =new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  update(index:any){
   // alert(index);
    this.getvalue.emit(index);
    
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resumeinput',
  templateUrl: './resumeinput.component.html',
  styleUrls: ['./resumeinput.component.css']
})
export class ResumeinputComponent implements OnInit {

  @Input()
  name:string="xyz";
  @Input()
  designation:string ="Designer" ;
  @Input()
  edu:any[]=["CSs","html"];
  @Input()
  skills:any[]=["xyz","Abc"];

  constructor() { }

  ngOnInit() {
  }

}

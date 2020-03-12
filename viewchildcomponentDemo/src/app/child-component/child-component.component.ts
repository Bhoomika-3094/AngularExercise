import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {
  result:number;
  constructor() { }

  ngOnInit() {
  }

  plush(frstval:number,scdval:number){
    this.result = +frstval + +scdval;
  }
  minus(frstval:number,scdval:number){
    this.result = frstval - scdval;
  }
  divide(frstval:number,scdval:number){
    this.result = frstval/scdval;
  }
  multy(frstval:number,scdval:number){
    this.result = frstval*scdval;
  }
}

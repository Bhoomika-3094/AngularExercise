import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-valueoperation',
  templateUrl: './valueoperation.component.html',
  styleUrls: ['./valueoperation.component.css']
})
export class ValueoperationComponent  {
  // result:number;
 
  
  constructor() { }


  ngOnInit() {
  }
  
  plush():any{
    console.log("child method called");
  }

}

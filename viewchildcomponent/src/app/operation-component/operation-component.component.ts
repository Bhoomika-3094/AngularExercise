import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {ValueoperationComponent} from '../valueoperation/valueoperation.component';
@Component({
  selector: 'app-operation-component',
  templateUrl: './operation-component.component.html',
  styleUrls: ['./operation-component.component.css']
})
export class OperationComponentComponent implements OnInit {

   // frstval:number;
    //scndval:number;
    //@ViewChild("firstval",{static:false})
   // firstval:ElementRef;
   // @ViewChild("secondval",{static:false})
    //secondval:ElementRef;
   @ViewChild(ValueoperationComponent,{static : false})
  valueoperationComponent : ValueoperationComponent;
   
  constructor() { }

  ngOnInit() {
  }

  plushDemo() :void{
    this.valueoperationComponent.plush();
    // this.frstval = this.firstval.nativeElement.value;
    // this.scndval = this.secondval.nativeElement.value;
    // alert("This is plus called"+ (+this.frstval + this.scndval));
    // return (+this.frstval + this.scndval);
  }
 // minus(){
   // this.frstval = this.firstval.nativeElement.value;
    //this.scndval = this.secondval.nativeElement.value;
    //this.result = this.frstval - this.scndval;
 // }
  //divide(){
    //this.frstval = this.firstval.nativeElement.value;
    //this.scndval = this.secondval.nativeElement.value;
    //this.result = this.frstval/this.scndval;
  //}
 // multy(){
   // this.frstval = this.firstval.nativeElement.value;
    //this.scndval = this.secondval.nativeElement.value;
    //this.result = this.frstval*this.scndval;
 // }
}

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponentComponent } from "../child-component/child-component.component";

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  @ViewChild("firstvalue",{static:false})
  firstvalue:ElementRef;
  @ViewChild("secondvalue",{static:false})
  secondvalue:ElementRef;
  @ViewChild(ChildComponentComponent,{static:false})
  ChildComponentComponent:ChildComponentComponent;

  constructor() { }

  ngOnInit() {
  }
  plush(){
    let frstval = this.firstvalue.nativeElement.value;
    let scdval = this.secondvalue.nativeElement.value;
    this.ChildComponentComponent.plush(frstval,scdval);
  }
  minus(){
    let frstval = this.firstvalue.nativeElement.value;
    let scdval = this.secondvalue.nativeElement.value;
    this.ChildComponentComponent.minus(frstval,scdval);
  }
  divide(){
    let frstval = this.firstvalue.nativeElement.value;
    let scdval = this.secondvalue.nativeElement.value;
    this.ChildComponentComponent.divide(frstval,scdval);
  }
  multy(){
    let frstval = this.firstvalue.nativeElement.value;
    let scdval = this.secondvalue.nativeElement.value;
    this.ChildComponentComponent.multy(frstval,scdval);
  }
}

import { Component, OnInit, ViewChild,ElementRef, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-democomponent',
  templateUrl: './democomponent.component.html',
  styleUrls: ['./democomponent.component.css']
})
export class DemocomponentComponent implements OnInit,AfterViewInit {

  @ViewChild("getvalue",{static:true})
  getvalue: ElementRef;

  gotval:string;


  constructor() { }

  ngOnInit() {
    alert("on init");
    this.getvalue.nativeElement.focus();
    this.getvalue.nativeElement.style.color='red';
    
  }
  gotvalue(){
    this.gotval=this.getvalue.nativeElement.value;
  }
  ngAfterViewInit(){ alert("after init");}

}

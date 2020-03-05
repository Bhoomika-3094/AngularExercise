import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-domexample',
  templateUrl: './domexample.component.html',
  styleUrls: ['./domexample.component.css']
})
export class DomexampleComponent implements OnInit,AfterViewInit{

  @ViewChild("female",{static:false})
  female:ElementRef;
  @ViewChild("male",{static:false})
  male:ElementRef;
  msg:string ='';
  constructor() { }
  types:string='';
  ngOnInit() {
     
   }
  
    ngAfterViewInit(){
    }
    changemale(){
      if(this.male.nativeElement.checked=true){
        console.log("hello");
        this.types="danger";
        this.msg="Your are not eligible for use all services";
      }
    }
    change(){
      if(this.female.nativeElement.checked=true){
        this.types="success";
        this.msg="Your are eligible for use all services";
        console.log("hiii");
      }
    }
    
}

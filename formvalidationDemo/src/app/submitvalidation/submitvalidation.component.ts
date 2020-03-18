import { Component, OnInit } from '@angular/core';
import {City} from './city.model';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-submitvalidation',
  templateUrl: './submitvalidation.component.html',
  styleUrls: ['./submitvalidation.component.css']
})
export class SubmitvalidationComponent implements OnInit {
  states :any[] = ["Gujrat", "Punjab" ,"Rajsthan", "Maharastra"];
  city : City[] = [];
  constructor() { }

  ngOnInit() {
    let city1 = new City(1,"ah","Ahemdabad");
    let city2 = new City(2,"HR","Haryana");
    let city3 = new City(3,"JAY","Jaipur");
    let city4 = new City(4,"PUN","Pune");
    this.city.push(city1,city2,city3,city4);
  }
  save(frm : NgForm):void{

    console.log(frm);
    console.log(frm.controls['frstname'].value);
    console.log(frm.controls['scnd'].value);
    console.log(frm.controls['email'].value);
  };

}

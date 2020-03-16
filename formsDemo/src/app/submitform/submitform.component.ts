import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {City} from './city.model';

@Component({
  selector: 'app-submitform',
  templateUrl: './submitform.component.html',
  styleUrls: ['./submitform.component.css']
})
export class SubmitformComponent implements OnInit {

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

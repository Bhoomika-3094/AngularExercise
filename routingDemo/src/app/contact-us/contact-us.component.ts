import { Component, OnInit } from '@angular/core';
import  { Location } from '@angular/common';
import { from } from 'rxjs';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUSComponent implements OnInit {

  constructor(private location :Location) { }

  ngOnInit() {
  }
  back():void{
    this.location.back();
  }

}

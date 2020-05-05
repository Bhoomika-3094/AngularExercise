import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  welcomemsg : string = "";
  constructor(private activete : ActivatedRoute) { }

  ngOnInit() {
    this.activete.queryParams.subscribe(
      (queryParam)=>{
        this.welcomemsg = 'Welcome '+ queryParam.name +' From '+queryParam.city;
      }
    )
  }


}

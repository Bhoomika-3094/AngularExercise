import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../auth/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authenticate : AuthenticationService, private router : Router) { }

  ngOnInit() {
    this.authenticate.islogging = false;
    this.authenticate.loginsuccesspage = 'home';
    // console.log("hiii");
    this.router.navigate(['sigin']);
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routingDemo';
  islogging : boolean = false;
  constructor( private authenitacte :AuthenticationService ){

  }
  ngOnInit(){
    // this.loggingService.logInfo("App Component Inititalized....!");
  }
  checkisloggin() :void{
    this.islogging = this.authenitacte.islogging;
    // alert("app-component" + this.isLoggedIn);
  }
}

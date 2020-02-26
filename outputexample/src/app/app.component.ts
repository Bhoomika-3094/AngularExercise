import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'outputexample';
  msg:string;
  getnewmessage(event){
    this.msg ="hello" + event;
  }
}

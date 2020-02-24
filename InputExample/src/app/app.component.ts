import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InputExample';

  desg:string ="Angular Developer";
  edulist: any[] =["MCA","BCA","12th"]
  skilllist: any[] = ["Angular 8","Html","css","javascript"]
}

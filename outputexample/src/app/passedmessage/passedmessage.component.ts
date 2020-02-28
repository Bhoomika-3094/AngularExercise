import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-passedmessage',
  templateUrl: './passedmessage.component.html',
  styleUrls: ['./passedmessage.component.css']
})
export class PassedmessageComponent implements OnInit {

  @Input()
  result:string ="hiii";
  @Input()
  color:string ="info";

  constructor() { }

  ngOnInit() {
  }

}

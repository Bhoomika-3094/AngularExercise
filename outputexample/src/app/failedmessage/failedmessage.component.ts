import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-failedmessage',
  templateUrl: './failedmessage.component.html',
  styleUrls: ['./failedmessage.component.css']
})
export class FailedmessageComponent implements OnInit {
  @Input()
  failedmsg:string ="Try again, Your Message is failed";
  
  @Output()
  getmessage =new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
    this.getmessage.emit(this.failedmsg);
  }

}

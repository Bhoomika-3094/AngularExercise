import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mygrid',
  templateUrl: './mygrid.component.html',
  styleUrls: ['./mygrid.component.css']
})
export class MygridComponent implements OnInit {

  @Input()
  headerlist:string[]=[];
  @Input()
  employeelist:any[]=[];
  constructor() { }

  ngOnInit() {
  }

}

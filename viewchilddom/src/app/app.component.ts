import { Component , ViewChild, ElementRef, AfterViewInit, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  @ViewChild("someInput",{static :false}) 
  someInput: ElementRef;
  @ViewChild("text",{static:true})
  text : ElementRef;
  getval:string;
  getvalue:string;

  ngOnInit(){
    this.text.nativeElement.color='red';
    this.text.nativeElement.style.background = 'yellow';
    this.text.nativeElement.innerHTML='This is Demo of Viewchile Dom Element';
  }

  ngAfterViewInit() {
    
    //this.someInput.nativeElement.value = "Anchovies! 🍕🍕";
    this.someInput.nativeElement.style.background='gray';
   
  }
  Add(){
    this.getvalue = this.someInput.nativeElement.value;
  }
  
}

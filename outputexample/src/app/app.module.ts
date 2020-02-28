import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FailedmessageComponent } from './failedmessage/failedmessage.component';
import { MygridoutputexampleComponent } from './mygridoutputexample/mygridoutputexample.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';

@NgModule({
  declarations: [
    AppComponent,
    FailedmessageComponent,
    MygridoutputexampleComponent,
    EmployeelistComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

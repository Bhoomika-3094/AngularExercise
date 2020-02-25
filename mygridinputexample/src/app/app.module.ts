import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployelistComponent } from './employelist/employelist.component';
import { MygridComponent } from './mygrid/mygrid.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployelistComponent,
    MygridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

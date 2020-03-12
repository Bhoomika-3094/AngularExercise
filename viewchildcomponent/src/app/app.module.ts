import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OperationComponentComponent } from './operation-component/operation-component.component';
import { ValueoperationComponent } from './valueoperation/valueoperation.component';


@NgModule({
  declarations: [
    AppComponent,
    OperationComponentComponent,
    ValueoperationComponent
   
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import {StudentService} from '../app/service/student.service';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { from } from 'rxjs';
import { StudentbodyComponent } from './studentbody/studentbody.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentbodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

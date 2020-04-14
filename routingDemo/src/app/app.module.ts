import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { SigninComponent } from './signin/signin.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentService} from '../app/service/student.service';
import { from } from 'rxjs';
import { StudentformComponent } from './studentform/studentform.component';
import { AdminComponent } from './admin/admin.component';
import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    StudentlistComponent,
    ContactUSComponent,
    SigninComponent,
    StudentformComponent,
    AdminComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

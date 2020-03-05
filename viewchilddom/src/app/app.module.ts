import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemocomponentComponent } from './democomponent/democomponent.component';
import { DomexampleComponent } from './domexample/domexample.component';

@NgModule({
  declarations: [
    AppComponent,
    DemocomponentComponent,
    DomexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,DemocomponentComponent]
})
export class AppModule { }

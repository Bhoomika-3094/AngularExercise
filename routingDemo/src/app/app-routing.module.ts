import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ContactUSComponent } from './contact-us/contact-us.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'aboutus', component : AboutUsComponent },
  { path:'studentlist', component :StudentlistComponent },
  { path:'contctus', component: ContactUSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

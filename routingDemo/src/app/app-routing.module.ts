import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import {SigninComponent}from './signin/signin.component';
import {StudentformComponent} from '../app/studentform/studentform.component';
import {AdminComponent} from '../app/admin/admin.component';
import { MessageComponent } from './message/message.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './auth/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path:'aboutus', component : AboutUsComponent },
  { path:'admin', component :AdminComponent, canActivate : [AuthGuardService],
    children : [
      { path:'studentlist', component :StudentlistComponent},  
      {
        path: 'studentform/:id', component:StudentformComponent 
      },
      {
        path: 'studentadd', component:StudentformComponent 
      },
      {path : 'studentedit',component : StudentformComponent }
    ]
    },
   
  { path:'contctus', component: ContactUSComponent },
  { path:'sigin', component : SigninComponent},
  { path:'sigout', component : LogoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

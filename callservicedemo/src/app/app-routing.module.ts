import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentbodyComponent } from './studentbody/studentbody.component';


const routes: Routes = [
 { path:'studentedit/:id', component : StudentbodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

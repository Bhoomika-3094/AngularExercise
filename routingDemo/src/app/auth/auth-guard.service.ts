import { Injectable } from '@angular/core';
import { CanActivate, Router, CanActivateChild, UrlSegment } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';
import { User } from './user.model';
import { Student } from '../studentlist/student.model';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate,CanActivateChild {

  constructor(private route : Router, private authentivate : AuthenticationService ) { }

  canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
  //  alert(state.url);

    if(this.authentivate.islogging){
        return true;
        
    }
    this.authentivate.loginsuccesspage = state.url;
    this.route.navigate(['sigin']);
    // alert("admin security");
    // return false;
  }
  canActivateChild(childRoute: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
    alert("activate child called!!");
    let user : User = JSON.parse(sessionStorage.getItem("loggedInUser"));
    alert(state.url + " "+ user.role+ childRoute.url );
    let link = childRoute.url;
    let s : UrlSegment = link[0];
    if(user.role == 'admin' && s.toString() == "studentform"){
      alert("you can't edit ")
      return false;
    }
    return true;
  }
}

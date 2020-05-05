import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../auth/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

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
}

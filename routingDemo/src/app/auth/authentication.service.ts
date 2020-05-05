import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { User} from "../auth/user.model";
import { from } from 'rxjs';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  islogging : boolean = false;
  loginsuccesspage : string = 'home';
  constructor(private httpclient: HttpClient) { }

  authenticate(username: string,password:string):Observable<User>{
    alert("auth service");
    return this.httpclient.get<User>("http://localhost:3000/login"+"?username=" +username+"&password=" +password).pipe(
      map(users => users[0])
    );
  }
}

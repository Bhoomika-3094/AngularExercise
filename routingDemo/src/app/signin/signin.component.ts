import { Component, OnInit } from '@angular/core';
import { User } from '../auth/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../auth/authentication.service';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { SelectorMatcher } from '@angular/compiler';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  sigingroup : FormGroup;
  constructor(private formBuilder : FormBuilder, private authentication : AuthenticationService, private route : Router) {}

  ngOnInit() {
    this.createLoginForm()
  }
  createLoginForm() : void {
    this.sigingroup= this.formBuilder.group(
      {
        username : ['',Validators.required],
        password : ['',Validators.required]
      }
    )
  }
  login(): void{
    console.log(this.sigingroup);
    if(this.sigingroup.valid){
      let username = this.sigingroup.get('username').value;
      let pass = this.sigingroup.get('password').value;
            this.authentication.authenticate(username,pass).subscribe(
              (users : User) =>{
                if(users === undefined){
                  alert("please enter valid username");
                  this.sigingroup.controls['username'].setValue('');
                  this.sigingroup.controls['password'].setValue('');
                  // this.sigingroup.set('password').value = '';
                }
                else{
                  this.authentication.islogging = true;
                    // console.log(JSON.stringify(users));
                  sessionStorage.setItem("loggedInUser",JSON.stringify(users));
                  this.route.navigate([this.authentication.loginsuccesspage],{queryParams : {name : users.name,city : 'pune'} });
                  alert("you are sucessfully login");
                }
              
               
              }
    
            );
    }
  }

}

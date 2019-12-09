import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { ValidService } from './service/valid.service';

@Component({
    selector:"app-login",
    templateUrl:"login.component.html",
    styleUrls:["login.component.scss"]
})
export class LoginComponent{
  constructor(private route:Router,
              private service:ValidService  
            ) { }
  username: any;
  email: any;
  password: any;
  navigate(username,password, event){

  /*  if(username.value.length<=0 || password.value.length<=0){
      alert("please enter details")
    }
    else if(username.value.length>=1 && password.value.length>=1){
      this.route.navigate(["/home"])
    } */

    event.preventDefault();
    var token=this.service.validUsers(username,password);

    if(typeof token !== 'undefined') {
      localStorage.setItem('token',token);
      this.route.navigate(["home"])
    }
  }
}
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:"app-login",
    templateUrl:"login.component.html",
    styleUrls:["login.component.scss"]
})
export class LoginComponent{
  constructor(private route:Router){
  }
  username: any;
  email: any;
  password: any;
  navigate(username,password){
    if(username.value.length<=0 || password.value.length<=0){
      alert("please enter details")
    }
    else if(username.value.length>=1 && password.value.length>=1){
      this.route.navigate(["/home"])
    }
  }
}
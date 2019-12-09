import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    selector:"app-login",
    templateUrl:"loginpage.component.html",
    styleUrls:["loginpage.component.scss"]
})
export class LoginpageComponent{
    username: any;
    password: any;
    constructor(private router:Router){}
    validate(){
        if(this.username=="pallavi" && this.password=="palavvas"){
            localStorage.setItem('token','validtoken')
            this.router.navigate(['comments'])
        }
        else{
           this.router.navigate(["editpage"])
        }
    }
}
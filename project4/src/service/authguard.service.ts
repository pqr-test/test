import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';

@Injectable({
    providedIn:'root'
})
export class authguardservice implements CanActivate{
    constructor(private route:Router){}
    canActivate(){
        if(localStorage.getItem('token')){
             return true
        }
        else{
            this.route.navigate(['loginpage'])
            return false
        }
    }
}
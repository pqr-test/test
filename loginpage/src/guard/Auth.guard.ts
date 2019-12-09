import { Injectable } from "@angular/core";
import { CanActivate, Router } from '@angular/router';
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private route: Router) { }
    CanActivate() {
        if (localStorage.getItem('token')) {
            return true;
        }
        else {
            this.route.navigate(['token']);
            return;
        }
    }
}

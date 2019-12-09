import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"app-nav",
    templateUrl:"navbar.component.html",
    styleUrls:["navbar.component.scss"]
})
export class NavbarComponent{
    constructor(private route:ActivatedRoute){}
    
}
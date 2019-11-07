import { Component } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:"app-view",
    templateUrl:"view.component.html",
    styleUrls:["view.component.scss"]
})
export class ViewComponent {
    public id:any=[];
    public name1:any="pallavi";
    public usersinfo;
    constructor(private views:UserService,
                private route:ActivatedRoute
            ) {
       this.route.params.subscribe(
           (res) => {
               this.id=res.id;
               alert(this.id);
               this.getview()
            }
       )     
    }
    getview(){
        return this.views.fetchUsers1(this.id).subscribe(
            (res) => {
             this.usersinfo=res;
             console.log(this.usersinfo)  
            }
        )
    }
}
import { Component } from "@angular/core";
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
    selector:"app-post",
    templateUrl:"post.component.html",
    styleUrls:["post.component.scss"]
})
export class PostComponent{
    users:any;
    changrkey: any;
    constructor(private route:UserService,
        private router:Router ){
        this.getdata()
    }
    getdata(){
        return this.route.fetchPosts().subscribe(
            (res) => {
                this.users=res;
                this.route.serviceData=res
            }
        )
    }

    selectedId(event){
        this.changrkey=event;
        if(this.changrkey){
         this.users=this.users.filter((val,i) => {
            return val.title==this.changrkey.title
           })
        }
        else{
            return this.users=this.route.serviceData
        }
    }  

}
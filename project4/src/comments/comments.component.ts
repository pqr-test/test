import { Component } from "@angular/core";
import { UserService } from 'src/service/user.service';
import { Router } from '@angular/router';

@Component({
    selector:'app-comments',
    templateUrl:'comments.component.html',
    styleUrls:['comments.component.scss']
})
export class CommentsComponent{
    public users:any;
    public page:number
    constructor(private service:UserService,
                private route:Router){
            this.getdata()
            
    }
    getdata(){
       var that=this;
        this.service.fetchComments().subscribe(res =>{
            that.users=res;
            console.log(that.users)
        })
    }
    pageChanged(event: any): void {
        this.page = event.page;
        if(this.page==2){
            this.service.comments("_page=2&_limit=50").subscribe(
                res=>{
                    this.users=res;
                }
            )
        }
        if(this.page==3){
            this.service.comments("_page=3&_limit=50").subscribe(
                res=>{
                    this.users=res;
                }
            )
        }
        if(this.page==4){
            this.service.comments("_page=4&_limit=50").subscribe(
                res=>{
                    this.users=res;
                }
            )
        }
    } 
    
    login(){
        localStorage.removeItem("token")
        this.route.navigate(["loginpage"])
    }
}

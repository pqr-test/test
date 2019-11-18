import { Component } from "@angular/core";
import { UserService } from 'src/services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:"app-user-edit",
    templateUrl:"user-edit.component.html",
    styleUrls:["user-edit.component.scss"]
})
export class UserEditComponent {
    public id:any;
    public currentuser;
    name: any;
    username:any;
    email:any;
    address:any;
    phone:any;
    constructor(private route:ActivatedRoute,
                private services:UserService
            ) {
        this.route.params.subscribe(
            (res)=>{
                this.id=res.id;
                alert(this.id);
               this.getdata()
            })
        }
       
    getdata(){
        return this.services.fetchUsers1(this.id).subscribe(
            (res) =>{
             this.currentuser=res;
             
             console.log(this.currentuser)  
            }
        )
    }
    change(key,event){
        if(key=='id'){
        this.id=event.target.value;
        }
        else if(key=='name'){
            this.name=event.target.value;
        }
        else if(key=='username'){
            this.username=event.target.value;
        }
        else if(key=='email'){
            this.email=event.target.value;
        }
        else if(key=='address.city'){
            this.address=event.target.value;
        }
        else if(key=='phone'){
            this.phone=event.target.value;
        }
    }
    update($event){
        var data:any=[{
            "id":this.id,
            "name":this.name,
            "username":this.username,
            "email":this.email,
            "address":this.address,
            "phone":this.phone
        }];
console.log(data)
    }
    
}
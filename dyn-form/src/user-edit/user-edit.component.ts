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
    change1(event){
        this.id=event.target.value;
         console.log(this.id)   
    }
    change2(event){
        this.name=event.target.value;
            console.log(this.name)
        }
    change3(event){
        this.username=event.target.value;
        console.log(this.username)
    }
    change4(event){
        this.email=event.target.value;
            console.log(this.email)
    }  
    change5(event){
        this.address=event.target.value;
            console.log(this.address)
    }
    change6(event){
        this.phone=event.target.value;
            console.log(this.phone)
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
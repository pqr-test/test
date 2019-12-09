import { Component, TemplateRef} from "@angular/core";
import { UserService } from 'src/service/user.service';
import {  BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
 

@Component({
    selector:"app-users",
    templateUrl:"users.component.html",
    styleUrls:["users.component.scss"]
})
export class UsersComponent{
    public users:any;
    public changekey: any;
    modalRef: BsModalRef;
    username: string;
    password: string;
    constructor(private route:UserService,
                private modalService: BsModalService,
                private router:Router  ){
        this.getdata()
    }
    getdata(){
        return this.route.fetchUsers().subscribe(
            (res) => {
             this.users=res;
             this.route.serviceData=res;
             console.log(this.users)
            }
        )
    }
    searchkey(event){
        this.changekey=event;
        if(this.changekey){
            this.users=this.users.filter((val,i) => {
                return val.username==this.changekey.username
            }
            )
        }
        else{
         return this.users= this.route.serviceData
        }
    }
    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }
     
    validate(){
        this.router.navigate(['/editpage'])
    }
}
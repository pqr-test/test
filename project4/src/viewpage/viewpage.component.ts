import { Component } from "@angular/core";
import { UserService } from 'src/service/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:"app-view",
    templateUrl:"viewpage.component.html",
    styleUrls:["viewpage.component.scss"]
})
export class ViewpageComponent{
    id: any;
    currentusers: any;
    constructor(private view:UserService,
        private route:ActivatedRoute,
        private router:Router
        ){
       this.route.params.subscribe(
           (res)=> {
               this.id=res.id;
               this.getdata()
           }
       )
    }
    getdata(){
        return this.view.fetchUsers1(this.id).subscribe(
            (res)=> {
                this.currentusers=res;
                
            } 
        )
    }
    gotousers(){
      return  this.router.navigate(["/users"])
    }
    
}
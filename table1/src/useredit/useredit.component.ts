import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as $ from "jquery";
@Component({
    selector:"app-useredit",
    templateUrl:"useredit.component.html",
    styleUrls:["useredit.component.scss"]
})
export class UsereditComponent {
    public id:any=[];
    public currentusers;
    constructor(private route:ActivatedRoute){
    
    var self=this;
    this.route.params.subscribe(
        function (res){
            self.id=res.id;
            alert(self.id);
            self.getInformation()
        }
    )
   }
   getInformation(){
       var that=this;
       $.ajax({
           url:"https://jsonplaceholder.typicode.com/users/"+this.id.userId,
           method:"Get",
           success:function(res){
               that.currentusers =res;
               debugger
               console.log(that.currentusers)
           }
       })
    }
}


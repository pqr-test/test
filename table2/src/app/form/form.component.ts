import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector:"app-form",
    templateUrl:"form.component.html",
    styleUrls:["form.component.scss"]
})
export class FormComponent {
    public id:any=null;
    public currentusers;
    constructor(private route:ActivatedRoute){
       var self=this;
        this.route.params.subscribe(
            (res) => {
                this.id=res.id;
                alert(this.id)
                this.getInfo()
           }
           )
       }
       getInfo(){
           var that=this;
           $.ajax({
               url:"https://jsonplaceholder.typicode.com/users/"+that.id,
               method:"Get",
               success:function(res){
                   that.currentusers =res;
                   console.log(that.currentusers)
               }
           })
        }
        
}
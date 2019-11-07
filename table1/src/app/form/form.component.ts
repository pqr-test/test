import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { analyzeAndValidateNgModules } from '@angular/compiler';


@Component({
    selector:"app-form",
    templateUrl:"form.component.html",
    styleUrls:["form.component.scss"]
})
export class FormComponent {
 public id:any=null;
 public currentuser;
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
                that.currentuser =res;
                console.log(that.currentuser)
            }
        })
     }
     
    }

 

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
 constructor(private route:ActivatedRoute){
       
     var self=this;
     this.route.params.subscribe(
         function (res){
             self.id=res.id;
             alert(self.id)
             
             self.getInfo()
         }
        )
    }
    
    getInfo(){
        $.ajax({
            url:"https://jsonplaceholder.typicode.com/users/"+this.id,
            method:"Get",
            success:function(res){
                console.log(res)
              
               
               
            }
        })
     }
     
    }

 

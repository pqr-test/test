import { Component, OnInit } from "@angular/core";
import * as $ from "jquery"
import { Router } from '@angular/router';

@Component({
    selector:"app-table",
    templateUrl:"table.component.html",
    styleUrls:["table.component.scss"]
})
export class TableComponent implements OnInit {
 private   users:any=[]
constructor(private route:Router){}
    ngOnInit(){
    var that=this;
        $.ajax({
          url:"https://jsonplaceholder.typicode.com/users",
          method:"Get",
          success:function(res){
            console.log(res)
            that.getusers(res);
          }
        })  
    }
    getusers(data){
        this.users=data;
    }
    gotoform($event){
        this.route.navigate(['form/:id']);
    }
}
import { Component, OnInit } from "@angular/core";
import * as $ from "jquery"
import { Router } from '@angular/router';

@Component({
    selector:"app-table",
    templateUrl:"table.component.html",
    styleUrls:["table.component.scss"]
})
export class TableComponent implements OnInit {
  private  users:any=[]
constructor(private route:Router){}
    ngOnInit(){
    var that=this;
        $.ajax({
          url:"https://jsonplaceholder.typicode.com/users",
          method:"Get",
          success:function(res: any){
            console.log(res)
            that.getusers(res);
          }
        })  
    }
    getusers(data: any){
        this.users=data;
    }
    gotouseredit(data){
        this.route.navigate(["form",data]);
    }
}
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router } from '@angular/router';
@Component({
    selector:"app-table",
    templateUrl:"table.component.html",
    styleUrls:["table.component.scss"]
})
export class TableComponent implements OnInit {
users:any;
constructor(private route:Router){}
ngOnInit(){
    var that=this;
$.ajax({
    url:"https://jsonplaceholder.typicode.com/users",
    method:"Get",
    success:function(res){
        that.users=res;
        console.log(that.users);
      that.gototable(res)
    }
})
}
gototable(data){
   this.users=data;
}

gotohome(data){
    this.route.navigate(['form',data]);
}
}
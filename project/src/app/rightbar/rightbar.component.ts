import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
   selector:"app-right",
   templateUrl:"rightbar.component.html",
   styleUrls:["rightbar.component.scss"]
})
export class RightComponent implements OnInit {
   res:any
   
ngOnInit(){
   var that=this;
   $.ajax({
      url:"https://jsonplaceholder.typicode.com/users",
      method:"Get",
      success:function(res){
      that.users(res);
   }
});

}
users(data){
   this.users=data;
}
}
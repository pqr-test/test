import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'dyn-card';
  private users:any=[];
ngOnInit(){
  var that=this;
  $.ajax({
    url:"https://jsonplaceholder.typicode.com/users",
    method:"Get",
    success:function(res){
      console.log(res);
      that.users=res;
      console.log(that.users.id);
      console.log(that.users.name);
      console.log(that.users.address.city);
      console.log(that.users.phone);
    }
  })
}
}

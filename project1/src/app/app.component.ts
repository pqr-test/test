import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'project1';
  users='hello';
  users2=["hai","hello","welcome"];
private  users1:any=[];
  xyz="200";
 getusers(){
   return this.users
 };
 
ngOnInit(){
  var that=this;
  console.log($("h1"));
 
  $.ajax({
   
    url:"https://jsonplaceholder.typicode.com/users",
    method:"Get",
    success:function (res) {
    that.users1=res;
    console.log(res)
      console.log(that.users1.email);
     
     
    }
  })
  
} 

}

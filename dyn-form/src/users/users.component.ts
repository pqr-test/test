import { Component } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { Router } from '@angular/router';
 
@Component({
  selector: "app-users",
  templateUrl: "users.component.html",
  styleUrls: ["users.component.scss"]
})
export class UsersComponent {
  public users: any = [];
  public name:string;
  public name1:string;
  constructor(private service: UserService,
    private route: Router
  ) {
    this.getusers()
  }
  getusers() {
    this.service.fetchUsers().subscribe(
      (res) => {
        this.service.userdata=res;
        this.users = res;
        console.log(this.users)
      }
    )
  }
  handlename(event){
     var  value=event.target.value;
     this.name=value;
    }
  searchkey(event){
    var searchkey=event.target.value;
    if(searchkey.length>=3){
    this.users=this.users.filter((val,i)=>{
      var name=val.name.toLowerCase();
      return name.indexOf(searchkey)!==-1
    })
  }
  else{
    this.users=this.service.userdata;
  }
  }
  gotoview(data) {
   this.route.navigate(["view",data]);
  }
}
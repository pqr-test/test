import { Component, Input } from "@angular/core";
import { UsersService } from 'src/service/users.service';

@Component({
    selector:"app-tile",
    templateUrl:"tile.component.html",
    styleUrls:["tile.component.scss"]
})
export class TileComponent {
    public users:any;
  constructor(private service:UsersService) { }
    getusers(){
        return this.service.fetchUsers().subscribe(
          (res)=>{
            this.users=res;
            console.log(this.users)
            
          }
        )
    }
}
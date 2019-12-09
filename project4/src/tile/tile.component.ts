import { Component } from "@angular/core";
import { UserService } from 'src/service/user.service';

@Component({
    selector:"app-tile",
    templateUrl:"tile.component.html",
    styleUrls:["tile.component.scss"]
})
export class TileComponent{
    users: any;
    constructor(private route:UserService){
        this.getdata()
    }
    getdata(){
        this.route.fetchUsers().subscribe(
            (res) => {
                this.users=res;
            }
        )
    }
}
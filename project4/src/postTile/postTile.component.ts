import { Component } from "@angular/core";
import { UserService } from 'src/service/user.service';

@Component({
    selector:"app-post",
    templateUrl:"postTile.component.html",
    styleUrls:["postTile.component.scss"] 
})
export class PostTileComponent{
    users: any;
    constructor(private route:UserService){
        this.getdata()
    }
    getdata(){
        return this.route.fetchPosts().subscribe(
            (res) => {
                this.users=res;
                console.log(this.users)
            }
        )
    }
}
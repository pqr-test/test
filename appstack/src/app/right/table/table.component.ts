import { Component } from '@angular/core';
import { UserService } from 'src/service/user.service';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss']
})
export class TableComponent {
   users:any;
   constructor(private table:UserService){
     this.usersdata()
   }
    usersdata(){
        return this.table.fetchusers().subscribe(
            (res) => {
                this.users=res;
                console.log(this.users)

            }
        )

    }

}

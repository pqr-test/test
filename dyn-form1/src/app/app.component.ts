import { Component, Input } from '@angular/core';
import { UsersService } from 'src/service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyn-form1';
  public user:any={
      name:"madhu",
      email:"malli@gmail.com"
  }
  Rename(){
    this.title="Vbm Info Tech";
  }
  Reset(){
    this.title="dyn-form1";
  }
 
}

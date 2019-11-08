import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dyn-form1';
  public users:any={
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

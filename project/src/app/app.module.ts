import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeftbarComponent } from './leftbar/leftbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { RightComponent } from './rightbar/rightbar.component';

const router=[
  {
    path:"home",
    component:HomeComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftbarComponent,
    RightComponent,
    FooterComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

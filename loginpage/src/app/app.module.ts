import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';

const Router=[
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/login"
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent
  }

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Router,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

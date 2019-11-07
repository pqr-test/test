import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { UsersComponent } from 'src/users/users.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { UserService } from 'src/services/user.service';
import { UserEditComponent } from 'src/user-edit/user-edit.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from 'src/view/view.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

const ROUTER=[
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"user-edit/:id",
    component:UserEditComponent
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"view/:id",
    component:ViewComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserEditComponent,
    HomeComponent,
    ViewComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTER,{
      useHash:true
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

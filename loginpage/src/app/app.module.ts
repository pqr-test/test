import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/login/login.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/home/home.component';
import { AuthGuard } from 'src/guard/Auth.guard';
import { ValidService } from 'src/login/service/valid.service';

const Router=[
 // { path:"", pathMatch:"full",redirectTo:"/login" },

//  { path:"login", component:LoginComponent },

//  { path:"home", component:HomeComponent }

{ path:"", redirectTo:"/login", pathMatch:"full" },

{ path:"login", component:LoginComponent, },

{ path:"home", component:HomeComponent, CanActivate:[AuthGuard] }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ValidService,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(Router//,{
     // useHash:true
   // }
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/home/home.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ServicesComponent } from 'src/services/services.component';
import { AboutComponent } from 'src/about/about.component';
import { CollegesComponent } from 'src/colleges/colleges.component';
import { BagsComponent } from 'src/bags/bags.component';
import { PhonesComponent } from 'src/phones/phones.component';

const Router=[
  {
    path:"",
    pathMatch:"full",
    redirectTo:'home'
  },
  {
    path:"home",
    component:HomeComponent
  },
  {
    path:"services",
    component:ServicesComponent
  }, {
    path:"about",
    component:AboutComponent
  },
  {
    path:"colleges",
    component:CollegesComponent
  },
  {
    path:"bags",
    component:BagsComponent
  },
  {
    path:"phones",
    component:PhonesComponent
  }

  
];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    CollegesComponent,
    BagsComponent,
    PhonesComponent
    

  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(Router,{
      useHash:true
    })
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

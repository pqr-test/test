import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftComponent } from './left/left.component';
import { RightComponent } from './right/right.component';
import { HeaderComponent } from './left/header/header.component';
import {  ContentComponent } from './left/content/content.component';
import { headerComponent } from './right/header/header.component';
import { NavbarComponent } from './right/navbar/nav.component';
import { TableComponent } from './right/table/table.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './right/footer/footer.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './right/page/page.component';
import { ProfileComponent } from './right/profile/profile.component';

const Router=[
{
  path:"",
  redirectTo:"/table",
  pathMatch:"full"
},
{
  path:"table",
  component:TableComponent
},
{
  path:"page",
  component:PageComponent
},
{
  path:"profile",
  component:ProfileComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    LeftComponent,
    HeaderComponent,
    ContentComponent,
    RightComponent,
    headerComponent,
    NavbarComponent,
    TableComponent,
    PageComponent,
    ProfileComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(Router,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

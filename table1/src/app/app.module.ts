import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

const Routes=[
  {
    path:"",
    pathMatch:"full",
    redirectTo:"/home"
  },
  {
    path:"form/:id",
    component:FormComponent
  },
  {
    path:"home",
    component:HomeComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    FormComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule.forRoot(Routes,{
      useHash:true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}

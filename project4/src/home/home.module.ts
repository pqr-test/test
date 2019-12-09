import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { UsersComponent } from 'src/navbar/users/users.component';
import { PostComponent } from 'src/navbar/post/post.component';
import { EditpageComponent } from 'src/editpage/editpage.component';
import { TileComponent } from 'src/tile/tile.component';
import { PostTileComponent } from 'src/postTile/postTile.component';
import { ViewpageComponent } from 'src/viewpage/viewpage.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from 'src/header/header.component';
import { NavbarComponent } from 'src/navbar/navbar.component';

const route=[
    { path:"", redirectTo:"/users", pathMatch:"full" },

    { path:"users", component:UsersComponent },

    { path:"post", component:PostComponent },

  
    { path:"editpage", component:EditpageComponent },
  
    { path:"tile", component:TileComponent },
  
    { path:"postTile", component:PostTileComponent },
  
    { path:"viewpage/:id", component:ViewpageComponent },
  
]
@NgModule({
    declarations:[
        UsersComponent,PostComponent,EditpageComponent,
        TileComponent,PostTileComponent,ViewpageComponent,HeaderComponent,NavbarComponent
    ],
    imports:[
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(route,{
            useHash:true
        })
    ],
    exports:[],
    providers:[]
})
export class HomeModule{}
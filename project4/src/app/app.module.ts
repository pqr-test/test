import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from 'src/navbar/users/users.component';
import { PostComponent } from 'src/navbar/post/post.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditpageComponent } from 'src/editpage/editpage.component';
import { ViewpageComponent } from 'src/viewpage/viewpage.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { LoginpageComponent } from 'src/loginpage/loginpage.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TileComponent } from 'src/tile/tile.component';
import { PostTileComponent } from 'src/postTile/postTile.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { authguardservice } from 'src/service/authguard.service';


const Route=[
  { path:"", pathMatch:"full", redirectTo:'loginpage' },

  { path:"users", component:UsersComponent }, 

  { path:"loginpage", component:LoginpageComponent, },

  { path:"post", component:PostComponent },

  { path:"editpage", component:EditpageComponent },

  { path:"tile", component:TileComponent },

  { path:"postTile", component:PostTileComponent },

  { path:"viewpage/:id", component:ViewpageComponent },

  { path:"comments", loadChildren:'../comments/comments.module#CommentsModule',
   canActivate: [authguardservice]
}
 
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    UsersComponent,
    PostComponent,
    EditpageComponent,
    ViewpageComponent,
    LoginpageComponent,
    TileComponent,
    PostTileComponent,
    
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,NgSelectModule,ReactiveFormsModule,
    CommonModule,
    RouterModule.forRoot(Route
     
    ),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    PaginationModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }

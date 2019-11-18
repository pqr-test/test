import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/header/header.component';
import { NavbarComponent } from 'src/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TileComponent } from 'src/tile/tile.component';
import { TextComponent } from 'src/text/text.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TileComponent,
    TextComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

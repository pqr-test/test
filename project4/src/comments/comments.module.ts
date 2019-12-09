import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
import { CommentsComponent } from './comments.component';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const ROUTES=[
    { path:'', pathMatch:'full', component:CommentsComponent } ]

@NgModule({
    imports:[
        CommonModule,
        FormsModule,ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        PaginationModule.forRoot()
    ],
    declarations:[
        CommentsComponent
    ]
})
export class CommentsModule{

}
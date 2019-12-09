import { NgModule } from "@angular/core";
import { UsersComponent } from './users.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


const route=[
    { path:"", pathMatch:"full", redirectTo:"/users" },

    { path:"users", component:UsersComponent }
]
@NgModule({
    declarations:[
        UsersComponent
    ],
    providers:[],
    imports:[
        NgSelectModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(route)
    ],
    exports:[]
})
export class UsersModule{}
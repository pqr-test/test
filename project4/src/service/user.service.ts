import { Injectable } from "@angular/core";
import { ActivatedRoute, CanActivate, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UserService{
    public serviceData;
    constructor(private http:HttpClient,
                private route:ActivatedRoute,
                private router:Router
        ){ }

    
    fetchUsers(){
        return this.http.get("https://jsonplaceholder.typicode.com/users")
    }
    fetchUsers1(id){
        return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
    fetchPosts(){
        return this.http.get("https://jsonplaceholder.typicode.com/posts")
    }
    fetchPosts1(id){
        return this.http.get("https://jsonplaceholder.typicode.com/posts"+id)
    }
    
   fetchComments(){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?_page&_limit=50")
    } 
    comments(info){
        return this.http.get("https://jsonplaceholder.typicode.com/comments?"+info)
    }
}
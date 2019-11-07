import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class UserService {
    public userdata:any=null;
    constructor(private http:HttpClient) {
      
     }
    fetchUsers(){
      return this.http.get("https://jsonplaceholder.typicode.com/users")
     
    }
    
    fetchUsers1(id){
      return this.http.get("https://jsonplaceholder.typicode.com/users/"+id)
    }
    

}
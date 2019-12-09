import { Injectable } from "@angular/core";

@Injectable({
           providedIn:'root'
})
export class ValidService {
    public users=[
        {
            username:'test',
            password:'test',
            token:'testxyz123'
        },
        {
            username:'admin',
            password:'admin',
            token:'adminxyz123'
        }
    ];
    validUsers(username,password){
        var user;
        user=this.users.filter(user => {
            if(user.username === username && user.password === password) {
                return true;
            }
        })
        if(user.length >=1){
            return user[0].token;
        }
    }
}
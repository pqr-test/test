import { Component } from "@angular/core";

@Component({
    selector:"app-check",
    templateUrl:"check.component.html",
    styleUrls:["check.component.scss"]
   
})
export class CheckComponent{
    street:any="palukurivari palem";
    city:any="nellore";
    Firstname: any="malli";
    Lastname: any="pallavi";
    Username: any="ashok";
    Email: any="pallavimalli4a3@gmail.com";
    country: any="india";
    state: any="andhra pradesh";
    zip: any="524321";
    cardname: any="debit card";
    cardnumber: any="12345678";
    Expiration: any="2020";
    CVV: any="3214";
 
    update(event){
        var data:any=[{
            "First name":this.Firstname,
            "Last name":this.Lastname,
            "Username":this.Username,
            "Email":this.Email,
            "Address":[{
                "street":this.street,
                "city":this.city,
                "Country":this.country,
                "State":this.state,
                "Zip":this.zip
            }],
            "Expiration":this.Expiration,
            "Card number":this.cardnumber,
            "Card name":this.cardname,
            "CVV":this.CVV
        }]
        console.log(data)
    }
}
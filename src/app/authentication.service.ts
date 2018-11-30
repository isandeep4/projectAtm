import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CardField } from './shared/cardfield';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';


var users = [
    new CardField("1","4321234211156755667","2323","200000"),
    new CardField("2","4454234211156755662","1123","300000"),
    new CardField("3","6572123421115675565","1243","400000"),
];
@Injectable()
export class AuthenticationService{
    constructor(private router: Router, private http: Http){};

    getServers(){
        return this.http.get("https://ng-cash-withdrawal.firebaseio.com/cardFields.json").map(res => res.json());
    }

    login(user){
        
         var authenticatedUser = users.find(u => u.card_number === user.card_number);
        if(authenticatedUser && authenticatedUser.pin === user.pin){

            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this.router.navigate(['/withdraw']);
            return true;
            
        }
        return false;

    }
    checkCredentials(){
        if(localStorage.getItem("user")=== null){
            this.router.navigate(['/login']);
        }
    }
}

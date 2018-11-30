import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';



@Injectable()
export class AuthenticationService{
    userId;
    constructor(private router: Router, private http: Http){};

    getJson(){
        return this.http.get("./assets/UsersDetails.json").map(res => res.json());
    }

    getUsers(){
        return this.http.get("https://ng-cash-withdrawal.firebaseio.com/users.json").map(res => res.json());
    }
    getUserById(userId){
        return this.http.get(`https://ng-cash-withdrawal.firebaseio.com/users/{userId}.json`).map(res => res.json());
    }

    checkCredentials(){
        if(localStorage.getItem("user")=== null){
            this.router.navigate(['/login']);
        }
    }
}

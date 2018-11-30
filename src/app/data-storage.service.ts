import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import { AuthenticationService } from './authentication.service';
import { CardField } from './shared/cardfield';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';

@Injectable()
export class DataStorageService{
    constructor(private router: Router, private http: Http , private authenticationService: AuthenticationService){};

    storeUsers(user, key){

        // let datas = JSON.stringify(user);
         console.log("user is", user, key );
        // console.log("data is", datas );
        return this.http.put('https://ng-cash-withdrawal.firebaseio.com/users/' + key +'/cardFields/balance.json', user[key].cardFields.balance);

    }
}
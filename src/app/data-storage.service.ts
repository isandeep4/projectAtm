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
       
        return this.http.put('https://ng-cash-withdrawal.firebaseio.com/users/' + key + '.json',
            {
            "atmFields": user[key].atmFields,
            "cardFields": user[key].cardFields	
            })
    }
    storeDebit(user,key){
        return this.http.post('https://ng-cash-withdrawal.firebaseio.com/users/' + key + '/transactionFields/debit.json', user[key].transactionFields.debit)
    }
    
}
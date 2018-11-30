import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardField } from '../shared/cardfield';
import { AuthenticationService } from '../authentication.service';
import { DataStorageService } from '../data-storage.service';
import { Response } from '@angular/http';


@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  amount ;
  user;
  availableAmount;
  constructor(private router: Router, private authenticatedService: AuthenticationService, 
    private _dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }
  onWithdraw(){
    if(!this.amount){
      this.router.navigate(['/withdraw']);
    }
    
    var userKey;
    for(let key in this.user){
      userKey = key;
    }
    this.availableAmount = this.user[userKey].cardFields.balance - this.amount;

    this.user[userKey].cardFields.balance = this.availableAmount;
    console.log('balance',this.user);
    this._dataStorageService.storeUsers(this.user, userKey)
    .subscribe((response: Response) => {
       console.log(response);
       this.router.navigate(['/balanceDetails']);
    }, (error => {
      console.log(error);
    }));

    //this.authenticatedService.checkCredentials
    //console.log(localStorage.getItem("user"));
    
  }

  
}

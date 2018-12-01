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
  public errMsg = "";
  amount ;
  user;
  availableAmount;
  constructor(private router: Router, private authenticatedService: AuthenticationService, 
    private _dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    
  }
  onWithdraw(){ 
  
    var tempAmount = this.amount;
    var currency_denomination = [];
    var denomination = [1000,500,200,100];
    var count= [];
    var counter = [0,0,0,0];  
    for(var i = 0; i < denomination.length; i++){
        for(var j =0; j < counter.length; j++){
          if (tempAmount >= denomination[i]){
            counter[j] =Math.floor(tempAmount/denomination[i]);
            tempAmount = tempAmount - counter[j]*denomination[i] ;
            console.log(denomination[i] ," : ", counter[j]);
            count.push(counter[j]);
            if(counter[j]){
              currency_denomination.push(denomination[i]);
            }
            
          }
        }
    }
    
    var userKey;
    for(let key in this.user){
      userKey = key;
    }

    if(!this.amount){
      this.router.navigate(['/withdraw']);
    }else if(this.amount>this.user[userKey].cardFields.balance){
      this.errMsg = "insufficient amount in your account";
      this.router.navigate(['/withdraw']);
    }else if(Math.floor(this.amount%100) !==0 ){
      this.errMsg = "please enter multiples of 100 , 200 , 500 ,1000";
      this.router.navigate(['/withdraw']);
    }else{
      this.user[userKey].atmFields.currency_denomination = currency_denomination;
    this.user[userKey].atmFields.count = count;

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
    this.user[userKey].transactionFields.debit = this.amount;
    console.log('debit',this.user[userKey].transactionFields.debit)
    this._dataStorageService.storeDebit(this.user,userKey).subscribe((res)=>{
      console.log(res['body'])
    })
    }

    
  }
}

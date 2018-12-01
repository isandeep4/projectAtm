import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-balance-details',
  templateUrl: './balance-details.component.html',
  styleUrls: ['./balance-details.component.css']
})
export class BalanceDetailsComponent implements OnInit {
  user;
  userDetails;
  available_balance;
  Withdrawal_denomination;
  count;
  atmFields;
  constructor(private authenticationService: AuthenticationService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log('user',this.user);
    var userKey ;
    for(let key in this.user){
      userKey = key;
    }
    this.authenticationService.getUserById(userKey)
    .subscribe((res:Response)=>{
      this.userDetails = res;
      this.available_balance = this.userDetails.cardFields.balance;
      this.atmFields = Object.values(this.userDetails.atmFields);
      this.Withdrawal_denomination = this.atmFields[1];
      this.count = this.atmFields[0];
      console.log('atm',this.Withdrawal_denomination)
     });
    
  }
  onCancel(){
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }

}

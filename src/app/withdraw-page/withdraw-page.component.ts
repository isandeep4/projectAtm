import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardField } from '../shared/cardfield';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-withdraw-page',
  templateUrl: './withdraw-page.component.html',
  styleUrls: ['./withdraw-page.component.css']
})
export class WithdrawPageComponent implements OnInit {

  amount ;
  user;
  availableAmount;
  constructor(private router: Router, private authenticatedService: AuthenticationService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
    console.log('this12',this.user['balance']);
  }
  onWithdraw(){
    if(!this.amount){
      this.router.navigate(['/withdraw']);
    }
    this.availableAmount = this.user.balance - this.amount;
    console.log('this123',this.availableAmount);
    
    //this.authenticatedService.checkCredentials
    //console.log(localStorage.getItem("user"));
    this.router.navigate(['/balanceDetails']);
  }

  
}

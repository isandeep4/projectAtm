import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance-details',
  templateUrl: './balance-details.component.html',
  styleUrls: ['./balance-details.component.css']
})
export class BalanceDetailsComponent implements OnInit {
  user;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

}

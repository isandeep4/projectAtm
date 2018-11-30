import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardField } from '../shared/cardfield';
import { AuthenticationService } from '../authentication.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public user = new CardField("","","","");
  public errMsg = "";

  constructor(private router: Router,public authenticationService: AuthenticationService ) { }

  ngOnInit() {
    this.authenticationService.getServers()
    .subscribe(
      (response)=>{
      console.log('response',response);
    },(error)=>{
      console.log(error);
    })
  }
  onLogin(){
    if(!this.authenticationService.login(this.user)){
      this.errMsg = 'Invalid Card details or Pin';
    }
  }


}

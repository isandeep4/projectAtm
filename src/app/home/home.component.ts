import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardField } from '../shared/cardfield';
import { AuthenticationService } from '../authentication.service';
import { Response } from '@angular/http';
import { DataStorageService } from '../data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public usersArray;
  public errMsg = "";
  public userDetails: any = {};

  constructor(private router: Router,private authenticationService: AuthenticationService,private dataStorageService: DataStorageService ) { }

  ngOnInit() {
  
    this.authenticationService.getUsers()
    .subscribe(
      (response)=>{
        this.usersArray = response;
      console.log('response',response);
    },(error)=>{
      console.log(error);
    })

  }
  onLogin(){

    var authenticatedUser = {};
    
    for(let user in this.usersArray){
        if(this.usersArray[user].cardFields.card_number == this.userDetails.card_number){
          authenticatedUser[user] = this.usersArray[user] ;
          break;
        }
    }
    //var authenticatedUser = this.usersArray.filter(u =>u.cardFields.card_number == this.userDetails.card_number);
    //console.log('authenticatedUser is', authenticatedUser);
    for(let user in authenticatedUser){
      if(authenticatedUser[user] && authenticatedUser[user].cardFields.pin == this.userDetails.pin){     
        localStorage.setItem("user", JSON.stringify(authenticatedUser));
        this.router.navigate(['/withdraw']);
      }
      else if(!this.authenticationService[0]){
          this.errMsg = 'Invalid Card details or Pin';
        }
  
    }
    
      
  }


}

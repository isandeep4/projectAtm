import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { AuthenticationService } from './authentication.service';
import { HttpModule } from '@angular/http';
import { DataStorageService } from './data-storage.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WithdrawPageComponent,
    BalanceDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthenticationService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { WithdrawPageComponent } from './withdraw-page/withdraw-page.component';
import { BalanceDetailsComponent } from './balance-details/balance-details.component';

const appRoutes : Routes = [
    { path : '' , pathMatch: 'full' , redirectTo: 'home'},
    { path: 'home', component: HomeComponent},
    { path: 'withdraw', component: WithdrawPageComponent},
    {path: 'balanceDetails', component: BalanceDetailsComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule { }
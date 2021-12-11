import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import{BrowserAnimationsModule }from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { Router } from '@angular/router';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BillpaymentComponent,
    TransactionComponent,
    WalletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private router: Router) {}

    billpayment(): void {
        this.router.navigateByUrl('billpayment');
    }
}



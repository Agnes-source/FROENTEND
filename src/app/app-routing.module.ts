import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillpaymentComponent } from './billpayment/billpayment.component';
import { TransactionComponent } from './transaction/transaction.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {path:'billpayment', component:BillpaymentComponent },
  {path:'transaction',component:TransactionComponent},/*set path for transaction*/
  {path:'wallet',component:WalletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }


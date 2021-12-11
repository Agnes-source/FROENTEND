import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  constructor(private router: Router) {}
/*set path in app-routing*/
  billpayment(): void {
      this.router.navigateByUrl('billpayment');
  }
  transaction():void{
    this.router.navigateByUrl('transaction');
  }
  wallet():void{
    this.router.navigateByUrl('wallet');
  }
}


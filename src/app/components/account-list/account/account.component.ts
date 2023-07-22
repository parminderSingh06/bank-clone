import { Component } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { CheckingAccount } from 'src/app/models/checking-account.model';
import { SavingsAccount } from 'src/app/models/savings-account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  public test1: SavingsAccount = new SavingsAccount( 321987654, 121000221, 8000.00, 0.47);
  public test2: CheckingAccount = new CheckingAccount(332441864, 210010112, 3000.53, 100);

   public balanceDisplay(amount : number): string{
    let formatvalue = amount.toFixed(2);
    return `${formatvalue}`;
  }

  public displayName(account): string{
    let type = account.accountType;
    if(type == 'checking'){
      return `CHECKING(...${this.getLastFourDigits(account.accountNumber)})`;
    }
    else{
      return `SAVINGS(...${this.getLastFourDigits(account.accountNumber)})`;
    }
  }

  public getLastFourDigits(number) {
    const numberString = number.toString();
    const lastFourDigits = numberString.slice(-4);
    return lastFourDigits;
  }
}

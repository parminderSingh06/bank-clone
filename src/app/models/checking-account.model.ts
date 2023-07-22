import { Account } from "./account.model";

export class CheckingAccount extends Account{
  public overdraftLimit: number;
  public accountType: string;

  constructor(accNum: number, routeNum: number, balance: number, overdraft: number){
    super(accNum, routeNum, balance);
    this.overdraftLimit = overdraft;
    this.accountType = 'checking';
  }
}

import { Account } from "./account.model";

export class SavingsAccount extends Account{
  public interestRate: number;
  public accountType: string;
  constructor(accNum: number, routeNum: number, balance: number, interest: number){
    super(accNum, routeNum, balance);
    this.interestRate = interest;
    this.accountType = 'savings';
  }
}

export class Account{
  public accountNumber: number;
  public routingNumber: number;
  public balance: number;

  constructor( accNum: number, routeNum: number,balance: number ){
    this.accountNumber = accNum;
    this.routingNumber = routeNum;
    this.balance = balance;
  }
}

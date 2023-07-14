import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountComponent } from './dashboard/account-list/account/account.component';
import { TransactionListComponent } from './dashboard/account-list/account/transaction-list/transaction-list.component';
import { TransactionComponent } from './dashboard/account-list/account/transaction-list/transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AccountListComponent,
    AccountComponent,
    TransactionListComponent,
    TransactionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
